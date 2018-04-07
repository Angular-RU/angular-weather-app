import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FavouriteStartComponent } from './favourite-start/favourite-start.component';

import { ConvertDatePipe } from './pipes/convert-date.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, FavouriteStartComponent, ConvertDatePipe, LoaderComponent],
  declarations: [FavouriteStartComponent, ConvertDatePipe, LoaderComponent]
})
export class SharedModule {}
