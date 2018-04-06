import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../services/http.service';

@Injectable()
export class CurrentCityStoreService {
  private subject = new BehaviorSubject<CitiesModel>(null);
  constructor(private httpService: HttpService) {}
  // public setCity(city: CitiesModel) {
  //   this.httpService.getWeather(44418).subscribe.switchMap(res => {
  //     this.subject.next(res);
  //   });
  // }

  public getCity(): Observable<CitiesModel> {
    return this.subject;
  }
}
