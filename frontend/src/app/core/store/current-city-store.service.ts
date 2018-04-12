import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { HttpService } from '../services/http.service';

@Injectable()
export class CurrentCityStoreService {
  private subject = new BehaviorSubject<any>(null);
  constructor(private httpService: HttpService) {}

  public setCity(city: any) {
    this.reset();
    this.httpService.getWeather(city.woeid).subscribe(res => {
      this.subject.next(res);
    });
  }
  public reset(): void {
    this.subject.next(null);
  }
  public getCity(): Observable<CitiesModel> {
    return this.subject;
  }
}
