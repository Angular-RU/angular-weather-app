import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { CurrentUserStoreService } from '../store/current-user.service';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, ReactiveFormsModule],
  declarations: [LoginComponent, RegistrationComponent],
  exports: [LoginComponent, RegistrationComponent],
  providers: [HttpService, CurrentUserStoreService]
})
export class UserFeaturesModule {}
