import { Component, OnInit, Input } from '@angular/core';
import { CitiesModel } from '../shared/models/cities.model';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {
  @Input() city: CitiesModel;
  constructor() {}

  ngOnInit() {}
}
