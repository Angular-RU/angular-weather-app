import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { WeatherViewComponent } from './main/weather-view/weather-view.component';
import { WeekViewComponent } from './main/weather-view/week-view/week-view.component';
import { DetailViewComponent } from './main/weather-view/detail-view/detail-view.component';
const ViewRoutes: Routes = [
  { path: '', component: WeekViewComponent },
  { path: 'detail', component: DetailViewComponent }
];
const weatherRouters: Routes = [
  {
    path: '',
    component: WeatherViewComponent,
    children: ViewRoutes
  }
];
const appRoutes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: MainComponent, children: weatherRouters }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, CoreModule, MainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
