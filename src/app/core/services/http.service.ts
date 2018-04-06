import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public getWeather(): Observable<any> {
    const url = '/api/location/44418/';
    return this.http.get(url);
  }
}
