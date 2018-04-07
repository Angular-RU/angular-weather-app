import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { WeatherViewModule } from './weather-view/weather-view.module';
import { RouterModule } from '@angular/router';
import { CurrentCityStoreService } from '../core/store/current-city-store.service';
import { CitiesStoreService } from '../core/store/cities-store.service';
import { HttpService } from '../core/services/http.service';

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, WeatherViewModule, RouterModule],

  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [CitiesStoreService, CurrentCityStoreService, HttpService]
})
export class MainModule {}
