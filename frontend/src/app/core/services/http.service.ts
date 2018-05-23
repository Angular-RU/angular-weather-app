import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../main/shared/models/user.model';
import { Urls } from '../urls/urls.const';

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

  public toggleFav(user, city): Observable<any> {
    const url = Urls.toggleFav();
    const data = {
      user: user,
      city: city
    };
    return this.http.post(url, data);
  }
}
