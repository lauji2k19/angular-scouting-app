import { Component, OnInit } from '@angular/core';
import { SimpleEvent } from '@app/models/simple-event';
import { FrcService } from '@app/services/frc.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './simple-events.component.html',
  styleUrls: ['./simple-events.component.css']
})
export class SimpleEventsComponent implements OnInit {
  cols: any[];
  simple_events: SimpleEvent[];
  menu_items: MenuItem[];

  constructor(private frc_service: FrcService) {}

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
    ]

    this.frc_service.getEventsSimplified(2019).subscribe(data => this.simple_events = data);

  }
}
