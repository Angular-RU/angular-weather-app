import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [CommonModule, MainRoutingModule, CoreModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {}
