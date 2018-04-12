import { Routes } from '@angular/router';
import { MainComponent } from '../../main/main.component';
import { DetailViewComponent } from '../../main/weather-view/detail-view/detail-view.component';
import { WeatherViewComponent } from '../../main/weather-view/weather-view.component';
import { WeekViewComponent } from '../../main/weather-view/week-view/week-view.component';
import { LoginComponent } from '../user-features/login/login.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from '../user-features/registration/registration.component';
import { NotFoundComponent } from '../../not-found/not-found.component';

const ViewRoutes: Routes = [
  { path: '', component: WeekViewComponent },
  { path: 'detail/:date', component: DetailViewComponent }
];
const weatherRouters: Routes = [
  {
    path: '',
    component: WeatherViewComponent,
    children: ViewRoutes
  }
];

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  { path: 'weather', component: MainComponent, children: weatherRouters, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];
