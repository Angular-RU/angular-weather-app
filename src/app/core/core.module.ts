import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [CommonModule, MaterialModule, LayoutModule],
  exports: [MaterialModule, LayoutModule],
  declarations: []
})
export class CoreModule {}
