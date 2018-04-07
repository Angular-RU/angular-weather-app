import { Routes } from '@angular/router';
import { WeekViewComponent } from '../../main/weather-view/week-view/week-view.component';
import { DetailViewComponent } from '../../main/weather-view/detail-view/detail-view.component';
import { WeatherViewComponent } from '../../main/weather-view/weather-view.component';
import { MainComponent } from '../../main/main.component';

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
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: MainComponent, children: weatherRouters }
];
