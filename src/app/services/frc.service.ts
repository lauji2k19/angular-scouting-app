import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, throwError, ObservedValueOf } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { SimpleEvent } from '@app/models/simple-event';
import { DetailedEvent } from '@app/models/detailed-event';

@Injectable({
  providedIn: 'root'
})
export class FrcService {
  constructor(private httpClient: HttpClient) { }

  getEventsSimplified(year: number): Observable<SimpleEvent[]> {
    const httpOptions = {
          headers: new HttpHeaders({
              'X-TBA-Auth-Key': environment.frcToken
          })
      };

    return this.httpClient
        .get<SimpleEvent[]>(`${environment.frcBaseUrl}/api/v3/events/${year}/simple`, httpOptions);
  }

  getEventsDetailed(year: number): Observable<DetailedEvent[]> {
    const httpOptions = {
      headers: new HttpHeaders({
          'X-TBA-Auth-Key': environment.frcToken
      })
    };

    return this.httpClient
      .get<DetailedEvent[]>(`${environment.frcBaseUrl}/api/v3/events/${year}`, httpOptions);
  }
}
