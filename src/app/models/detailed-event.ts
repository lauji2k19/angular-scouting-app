export interface DetailedEvent {
  key: string;
  name: string;
  event_code: string;
  event_type: number;
  district: string;
  city: string;
  state_prov: string;
  country: string;
  start_date: Date;
  end_date: Date;
  year: number;
  short_name: string;
  event_type_string: string;
  week: number;
  address: string;
  postal_code: string;
  location_name: string;
  timezone: string;
  website: string;
  lat: number;
  lng: number;
  first_event_id: string;
  first_event_code: string;
  webcasts: string; // placeholder
  division_keys: string;
  parent_event_key: string;
  playoff_type: number;
  playoff_type_string: string;
}
