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
import { appRoutes } from './core/routes/app-routes';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/routes/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CoreModule,
    MainModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
