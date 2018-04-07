import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public afService: AF, private router: Router) {}

  login() {
    this.afService.loginWithGoogle().then(data => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['']);
    });
  }

  ngOnInit() {}
}
