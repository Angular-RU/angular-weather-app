import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailViewComponent } from './detail-view.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [DetailViewComponent],
  declarations: [DetailViewComponent]
})
export class DetailViewModule {}
