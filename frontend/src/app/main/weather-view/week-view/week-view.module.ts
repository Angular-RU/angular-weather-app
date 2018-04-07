import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekViewComponent } from './week-view.component';
import { WeekViewCardComponent } from './week-view-card/week-view-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, CommonModule, SharedModule],
  exports: [WeekViewComponent, WeekViewCardComponent],
  declarations: [WeekViewComponent, WeekViewCardComponent]
})
export class WeekViewModule {}
