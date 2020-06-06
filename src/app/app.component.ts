import { Component } from '@angular/core';
import { SimpleEvent } from './models/simpleevent';
import { FrcService } from './services/frc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-scouting-app';
  cols: any[];
  simple_events: SimpleEvent[];

  constructor(private frc_service: FrcService) {}

  ngOnInit() {
    this.frc_service.getEvents(2019).subscribe(data => this.simple_events = data);

    this.cols = [
      { field: 'city', header: 'City' },
      { field: 'country', header: 'Country' },
      { field: 'district', header: 'District' },
      { field: 'end_date', header: 'End Date' },
      { field: 'event_code', header: 'Event Code' },
      { field: 'event_type', header: 'Event Type' },
      { field: 'key', header: 'Key' },
      { field: 'name', header: 'Name' },
      { field: 'start_date', header: 'Start Date' },
      { field: 'state_prov', header: 'State Province' },
      { field: 'year', header: 'Year' }
    ]
  }
}
