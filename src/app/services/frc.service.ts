import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, EMPTY } from 'rxjs';
import { catchError, expand } from 'rxjs/operators';
import { SimpleEvent } from '@app/models/simple-event';
import { DetailedEvent } from '@app/models/detailed-event';

@Injectable({
  providedIn: 'root'
})
export class FrcService {
  httpOptions: {};

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
          'X-TBA-Auth-Key': environment.frcToken
      })
  };
  }

  getEventsSimplified(): Observable<SimpleEvent[]> {
    let startYear: number = 2020;
    let test = [];
    return this.httpClient
        .get<SimpleEvent[]>(`${environment.frcBaseUrl}/api/v3/events/${startYear}/simple`, this.httpOptions)
        .pipe(
          expand(data => {
            if (data.length > 0) {
              startYear--;
              return this.httpClient.get<SimpleEvent[]>(`${environment.frcBaseUrl}/api/v3/events/${startYear}/simple`, this.httpOptions).pipe(catchError(err => EMPTY));
            }
            else {
              return EMPTY;
            }
          })
        );
  }

  getEventSimplified(year: number): Observable<SimpleEvent[]> {
    return this.httpClient
        .get<SimpleEvent[]>(`${environment.frcBaseUrl}/api/v3/events/${year}/simple`, this.httpOptions)
  }

  getEventDetailed(year: number): Observable<DetailedEvent[]> {
    return this.httpClient
      .get<DetailedEvent[]>(`${environment.frcBaseUrl}/api/v3/events/${year}`, this.httpOptions);
  }
}
