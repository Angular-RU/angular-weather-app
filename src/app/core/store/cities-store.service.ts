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
      id: 1,
      title: 'Москва',
      weather: [
        {
          date: '2018-03-26',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-27',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-03-28',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-29',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-03-30',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-31',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-04-01',
          temp: 2,
          status: 'cloudy'
        }
      ],
      fav: false
    },
    {
      id: 2,
      title: 'Санкт-Петербург',
      weather: [
        {
          date: '2018-03-26',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-27',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-03-28',
          temp: 11,
          status: 'sun'
        },
        {
          date: '2018-03-29',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-03-30',
          temp: 1,
          status: 'sun'
        },
        {
          date: '2018-03-31',
          temp: 2,
          status: 'cloudy'
        },
        {
          date: '2018-04-01',
          temp: 2,
          status: 'cloudy'
        }
      ],
      fav: false
    }
  ];
}
