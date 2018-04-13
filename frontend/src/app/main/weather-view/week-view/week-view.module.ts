import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekViewComponent } from './week-view.component';
import { WeekViewCardComponent } from './week-view-card/week-view-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { WeekGraphComponent } from './week-graph/week-graph.component';

@NgModule({
  imports: [RouterModule, CommonModule, SharedModule, ReactiveFormsModule],
  exports: [WeekViewComponent, WeekViewCardComponent],
  declarations: [WeekViewComponent, WeekViewCardComponent, WeekGraphComponent]
})
export class WeekViewModule {}
