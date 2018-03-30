import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [FavouritesComponent],
  exports: [FavouritesComponent]
})
export class FavouritesModule {}
