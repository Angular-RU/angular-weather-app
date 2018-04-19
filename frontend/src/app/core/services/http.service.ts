import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Urls } from '../urls/urls.const';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { UserModel } from '../../main/shared/models/user.model';

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

  public login(data: UserModel): Observable<any> {
    const url = 'http://localhost:4200/backend/login';
    return this.http.post(url, data);
  }

  public registration(data: UserModel): Observable<any> {
    const url = Urls.registration();
    return this.http.post(url, data);
  }
}
