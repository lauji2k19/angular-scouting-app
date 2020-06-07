import { Component, OnInit } from '@angular/core';
import { SimpleEvent } from '@app/models/simple-event';
import { FrcService } from '@app/services/frc.service';
import { MenuItem } from 'primeng/api';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StartLoading, StopLoading } from '@app/actions/loading.actions';
import { LoadingState } from '@app/state/loading.state';

@Component({
  selector: 'app-home',
  templateUrl: './simple-events.component.html',
  styleUrls: ['./simple-events.component.css']
})
export class SimpleEventsComponent implements OnInit {
  cols: any[];
  simple_events: SimpleEvent[];
  menu_items: MenuItem[];
  yearInput: string;
  searchError: string;
  @Select(LoadingState.getLoadingState) loading: Observable<boolean>;

  constructor(private frc_service: FrcService, private store: Store) {}

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
    this.simple_events = [];
  }

  filterByValue(array, string) {
    return array.filter(o => Object.keys(o).some(k => o[k]?.toString()?.toLowerCase()?.includes(string.toLowerCase())));
  }

  searchForAllEvents(event) {
    this.store.dispatch(new StartLoading());
    this.frc_service.getAllEventsSimplified()
      .subscribe(
        data => this.simple_events = this.simple_events.concat(data),
        error => console.log(error.error),
        () => this.store.dispatch(new StopLoading())
      );
  }

  searchForEvents() {
    // this.frc_service.getEventsSimplified(2020).subscribe(
    //   data => {
    //   },
    //   error => {
    //     if (error.status == 404) {
    //       const message: string = error.error["Errors"].find(obj => obj["year"] != null)["year"];
    //       this.searchError = message != null ? message : "An unknown 404 error occurred.";
    //     }
    //     else {
    //       this.searchError = "An unknown error occured. Check the console.";
    //     }
    //   },
    //   () => this.searchError = ''
    //   );
  }
}
