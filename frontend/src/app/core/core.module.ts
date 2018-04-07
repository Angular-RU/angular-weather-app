import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { FavouritesModule } from './favourites/favourites.module';
import { UserFeaturesModule } from './user-features/user-features.module';

@NgModule({
  imports: [CommonModule, LayoutModule, FavouritesModule, UserFeaturesModule],
  exports: [LayoutModule, FavouritesModule, FavouritesModule, UserFeaturesModule],
  declarations: []
})
export class CoreModule {}
