import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CurrentUserStoreService } from '../store/current-user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  user: string;
  constructor(private currentUserStoreService: CurrentUserStoreService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.currentUserStoreService.getuser().subscribe(res => (this.user = res));
    return !!this.user;
  }
}
