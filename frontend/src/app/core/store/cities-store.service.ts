import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CitiesStoreService {
  private subject = new BehaviorSubject<CitiesModel[]>(getMockSities());

  public getCities(): Observable<CitiesModel[]> {
    return this.subject;
  }
}

function getMockSities(): CitiesModel[] {
  return [
    {
      id: 2122265,
      title: 'Москва',
      consolidated_weather: null
    },
    {
      id: 2123260,
      title: 'Санкт-Петербург',
      consolidated_weather: null
    }
  ];
}
