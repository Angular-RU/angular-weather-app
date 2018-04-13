import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

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
      password: this.registration_password.value
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
