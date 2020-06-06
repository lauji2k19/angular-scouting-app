import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { SimpleEvent } from '../models/simpleevent';

@Injectable({
  providedIn: 'root'
})
export class FrcService {
  constructor(private httpClient: HttpClient) { }

  getEvents(year: number) {
    const httpOptions = {
          headers: new HttpHeaders({
              'X-TBA-Auth-Key': environment.frcToken
          })
      };

    return this.httpClient
        .get<SimpleEvent[]>(`${environment.frcBaseUrl}/api/v3/events/${year}/simple`, httpOptions);
  }
}
