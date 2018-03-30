import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FavouriteStartComponent } from './favourite-start/favourite-start.component';
import { FavouritesCitiesPipe } from './pipes/favourites-cities.pipe';
import { ConvertDatePipe } from './pipes/convert-date.pipe';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, FavouriteStartComponent, FavouritesCitiesPipe, ConvertDatePipe],
  declarations: [FavouriteStartComponent, FavouritesCitiesPipe, ConvertDatePipe]
})
export class SharedModule {}
