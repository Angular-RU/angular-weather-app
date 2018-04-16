import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentUserStoreService {
  private subject = new BehaviorSubject<any>(null);

  public getuser(): Observable<any> {
    return this.subject;
  }
  public reset(): void {
    this.subject.next(null);
  }
  public setUser(user: any) {
    this.reset();
    this.subject.next(user);
  }
}
