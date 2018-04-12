import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Urls } from '../urls/urls.const';
import { UserBaseModel } from '../shared/models/userBase.model';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public getWeather(id: number): Observable<any> {
    const url = Urls.getCurrentWeather(id);
    return this.http.get(url);
  }

  public getAllCities(query: string): Observable<any> {
    const url = Urls.getAllCities(query);
    return this.http.get(url);
  }

  public testNest(): Observable<any> {
    const url = 'http://localhost:4200/backend/login';
    return this.http.get(url);
  }

  public login(data: UserBaseModel): Observable<any> {
    const url = 'http://localhost:4200/backend/login';
    return this.http.post(url, data);
  }

  public registration(data: UserBaseModel): Observable<any> {
    const url = 'http://localhost:4200/backend/registration';
    return this.http.post(url, data);
  }
}
