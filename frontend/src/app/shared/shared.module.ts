import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

import { ConvertDatePipe } from './pipes/convert-date.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, ConvertDatePipe, LoaderComponent],
  declarations: [ConvertDatePipe, LoaderComponent]
})
export class SharedModule {}
