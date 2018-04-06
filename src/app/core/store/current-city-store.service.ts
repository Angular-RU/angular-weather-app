import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentCityStoreService {
  private subject = new BehaviorSubject<CitiesModel>(null);

  public setCity(city: CitiesModel) {
    this.subject.next(city);
  }

  public getCity(): Observable<CitiesModel> {
    return this.subject;
  }
}
