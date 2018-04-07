import { Component, OnInit } from '@angular/core';
import { CurrentUserStoreService } from '../../store/current-user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$: Observable<string>;
  constructor(private currentUserStoreService: CurrentUserStoreService, private router: Router) {}

  ngOnInit() {
    this.user$ = this.currentUserStoreService.getuser();
  }

  public logout(): void {
    this.currentUserStoreService.reset();
    this.router.navigate(['/login']);
  }
  public login(): void {
    this.router.navigate(['/login']);
  }
}
