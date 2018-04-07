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

  public setCity(city: CitiesModel) {
    this.reset();
    this.httpService.getWeather(city.id).subscribe(res => {
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
