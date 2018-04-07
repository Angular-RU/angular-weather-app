import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { FavouritesModule } from './favourites/favourites.module';

@NgModule({
  imports: [CommonModule, LayoutModule, FavouritesModule],
  exports: [LayoutModule, FavouritesModule, FavouritesModule],
  declarations: []
})
export class CoreModule {}
