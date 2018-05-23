import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../../main/shared/models/user.model';
import { CurrentUserStoreService } from '../../store/current-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$: Observable<UserModel>;
  constructor(private currentUserStoreService: CurrentUserStoreService, private router: Router) {}

  ngOnInit() {
    this.user$ = this.currentUserStoreService.getuser();
  }

  public logout(): void {
    this.currentUserStoreService.reset();
    localStorage.clear();
  }
}
