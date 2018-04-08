import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentUserStoreService {
  private subject = new BehaviorSubject<string>(null);

  public getuser(): Observable<string> {
    return this.subject;
  }
  public reset(): void {
    this.subject.next(null);
  }
  public setUser(user: string) {
    this.reset();
    this.subject.next(user);
  }
}
