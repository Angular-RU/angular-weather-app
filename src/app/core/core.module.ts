import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, LayoutModule],
  exports: [LayoutModule],
  declarations: []
})
export class CoreModule {}
