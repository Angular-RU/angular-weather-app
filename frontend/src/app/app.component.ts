import { Component, OnInit } from '@angular/core';
import { CurrentUserStoreService } from './core/store/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private currentUserService: CurrentUserStoreService) {}

  ngOnInit(): void {}
}
