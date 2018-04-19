import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '../../../shared/models/cities.model';

@Component({
  selector: 'app-week-graph',
  templateUrl: './week-graph.component.html',
  styleUrls: ['./week-graph.component.scss']
})
export class WeekGraphComponent implements OnInit {
  @Input() weather: WeatherModel[];

  ngOnInit() {}

  public get dotsMax(): string {
    return this.weatherToDts(this.weather, 'max_temp');
  }

  public get dotsMin(): string {
    return this.weatherToDts(this.weather, 'min_temp');
  }

  private weatherToDts(weather: any[], temp: string): string {
    return weather
      .map((day, i) => this.weatherToPoint(day, i, temp))
      .map(this.pointToString)
      .reduce((a, point) => `${a}${point}`, '')
      .concat('1005,250 5,250 ', this.pointToString(this.weatherToPoint(weather[0], 0, temp)));
  }

  private weatherToPoint(w, index, temp: string) {
    return {
      x: index * (1000 / 5) + 5,
      y: 250 - w[temp] * 5
    };
  }

  private pointToString(p) {
    return `${p.x},${p.y} `;
  }
}
