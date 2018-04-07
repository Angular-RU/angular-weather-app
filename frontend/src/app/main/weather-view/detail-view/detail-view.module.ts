import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailViewComponent } from './detail-view.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [DetailViewComponent],
  declarations: [DetailViewComponent]
})
export class DetailViewModule {}
