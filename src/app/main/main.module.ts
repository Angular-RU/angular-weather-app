import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { WeatherViewModule } from './weather-view/weather-view.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, WeatherViewModule, RouterModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {}
