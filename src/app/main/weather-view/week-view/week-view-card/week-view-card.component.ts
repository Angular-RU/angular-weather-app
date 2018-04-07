import { Component, OnInit, Input } from '@angular/core';
import { CitiesModel, WeatherModel } from '../../../shared/models/cities.model';

@Component({
  selector: 'app-week-view-card',
  templateUrl: './week-view-card.component.html',
  styleUrls: ['./week-view-card.component.scss']
})
export class WeekViewCardComponent implements OnInit {
  constructor() {}
  @Input() weather: WeatherModel;
  @Input() currentCity: string;
  ngOnInit() {}
}
