import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../main/shared/models/user.model';

@Injectable()
export class CurrentUserStoreService {
  private subject = new BehaviorSubject<UserModel>(null);

  public getuser(): Observable<UserModel> {
    return this.subject;
  }
  public reset(): void {
    this.subject.next(null);
  }
  public setUser(user: UserModel) {
    this.reset();
    this.subject.next(user);
  }
}
