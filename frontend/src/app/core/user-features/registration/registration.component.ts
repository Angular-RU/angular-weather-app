import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registration_login: FormControl = new FormControl('', Validators.required);
  public registration_password: FormControl = new FormControl('', Validators.required);
  notification: string;
  isButtonDisabled: boolean;
  registrationDone: boolean;
  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.isButtonDisabled = false;
  }
  public registration(): void {
    const user = {
      login: this.registration_login.value,
      password: this.registration_password.value,
      favourites: null
    };
    this.httpService.registration(user).subscribe(
      res => {
        this.isButtonDisabled = true;
        this.registrationDone = true;
        this.notification = 'Вы успешно зарегистрированы';
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 1000);
      },
      err => {
        this.notification = 'Пользователь уже существует в системе';
        this.registrationDone = false;
      }
    );
  }
}
