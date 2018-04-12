import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { CitiesModel } from '../../main/shared/models/cities.model';

@Injectable()
export class CitiesStoreService {
  private subject = new BehaviorSubject<CitiesModel[]>(null);

  public getCities(): Observable<CitiesModel[]> {
    return this.subject;
  }
}
