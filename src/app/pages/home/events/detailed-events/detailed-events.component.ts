import { Component, OnInit } from '@angular/core';
import { DetailedEvent } from '@app/models/detailed-event';
import { FrcService } from '@app/services/frc.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './detailed-events.component.html',
  styleUrls: ['./detailed-events.component.css']
})
export class DetailedEventsComponent implements OnInit {
  cols: any[];
  detailed_events: DetailedEvent[];
  menu_items: MenuItem[];

  constructor(private frc_service: FrcService) {}

  ngOnInit() {
    this.cols = [
      { field: 'key', header: 'Key' },
      { field: 'name', header: 'Name' },
      { field: 'event_code', header: 'Event Code' },
      { field: 'event_type', header: 'Event Type' },
      { field: 'district', header: 'District' },
      { field: 'city', header: 'City' },
      { field: 'state_prov', header: 'State Province' },
      { field: 'country', header: 'Country' },
      { field: 'start_date', header: 'Start Date' },
      { field: 'end_date', header: 'End Date' },
      { field: 'year', header: 'Year' },
      { field: 'short_name', header: 'Short Name' },
      { field: 'event_type_string', header: 'Event Type String' },
      { field: 'week', header: 'Week' },
      { field: 'address', header: 'Address' },
      { field: 'postal_code', header: 'Postal Code' },
      { field: 'location_name', header: 'Location Name' },
      { field: 'timezone', header: 'Timezone' },
      { field: 'website', header: 'Website' },
      { field: 'year', header: 'Year' }
    ]

    this.frc_service.getEventsDetailed(2019).subscribe(data => this.detailed_events = data);

  }
}
