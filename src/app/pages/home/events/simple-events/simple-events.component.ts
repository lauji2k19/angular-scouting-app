import { Component, OnInit } from '@angular/core';
import { SimpleEvent } from '@app/models/simple-event';
import { SimpleEventsState } from '@app/state/simple-events.state';
import { LoadingState } from '@app/state/loading.state';
import { FrcService } from '@app/services/frc.service';
import { MenuItem } from 'primeng/api';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddEventData } from '@app/actions/simple-events.actions';

@Component({
  selector: 'app-home',
  templateUrl: './simple-events.component.html',
  styleUrls: ['./simple-events.component.css']
})
export class SimpleEventsComponent implements OnInit {
  cols: any[];
  @Select(SimpleEventsState.getEvents) stored_events: Observable<SimpleEvent[]>;
  displayed_events: SimpleEvent[];
  menu_items: MenuItem[];
  searchInput: string;
  searchError: string;

  constructor(private frc_service: FrcService, private store: Store, private NgxUiLoaderService: NgxUiLoaderService) {}

  ngOnInit() {
    this.cols = [
      { field: 'city', header: 'City' },
      { field: 'country', header: 'Country' },
      { field: 'end_date', header: 'End Date' },
      { field: 'event_code', header: 'Event Code' },
      { field: 'event_type', header: 'Event Type' },
      { field: 'key', header: 'Key' },
      { field: 'name', header: 'Name' },
      { field: 'start_date', header: 'Start Date' },
      { field: 'state_prov', header: 'State Province' },
      { field: 'year', header: 'Year' }
    ];

    this.stored_events.subscribe(data => {
      if (data.length == 0) {
        this.NgxUiLoaderService.start();
        this.frc_service.getEventsSimplified()
          .subscribe(
            data => this.store.dispatch(new AddEventData(data)),
            error => console.log(error.error),
            () => this.NgxUiLoaderService.stop()
          );
      }
    });
  }

  filterByValue(array, string) {
    return array.filter(o => Object.keys(o).some(k => o[k]?.toString()?.toLowerCase()?.includes(string.toLowerCase())));
  }

  searchForEvents() {
    this.stored_events.subscribe(data => {
      this.displayed_events = this.filterByValue(data, this.searchInput);
    })
  }
}
