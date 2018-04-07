import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CurrentUserStoreService } from '../../store/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: FormControl = new FormControl('', Validators.required);
  public password: FormControl = new FormControl('', Validators.required);
  notification: string;
  constructor(
    private httpService: HttpService,
    private currentUserStoreService: CurrentUserStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.notification = null;
  }
  public auth(): void {
    this.httpService.postNest({ login: this.login.value, password: this.password.value }).subscribe(
      res => {
        this.currentUserStoreService.setUser(res.login);
        this.router.navigate(['/weather']);
      },
      err => {
        this.notification = 'Ошибка авторизации.';
      }
    );
  }
}
