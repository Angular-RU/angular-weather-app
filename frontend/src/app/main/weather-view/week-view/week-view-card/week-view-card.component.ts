import { Component, Input } from '@angular/core';
import { WeatherModel } from '../../../shared/models/cities.model';

@Component({
  selector: 'app-week-view-card',
  templateUrl: './week-view-card.component.html',
  styleUrls: ['./week-view-card.component.scss']
})
export class WeekViewCardComponent {
  @Input() weather: WeatherModel;
  @Input() currentCity: string;
}
