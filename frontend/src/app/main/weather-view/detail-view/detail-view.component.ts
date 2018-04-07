import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherModel, CitiesModel } from '../../shared/models/cities.model';
import { Observable } from 'rxjs/Observable';
import { CurrentCityStoreService } from '../../../core/store/current-city-store.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  currentDay: WeatherModel;
  currentCity: CitiesModel;
  city: string;
  date: string;
  constructor(private activatedRoute: ActivatedRoute, private currentCityStoreService: CurrentCityStoreService) {}

  ngOnInit() {
    this.findInfo();
  }

  private findInfo(): void {
    this.getCurrentCity();
    this.getActiveDate();
    this.currentDay = this.currentCity.consolidated_weather.find(i => i.applicable_date === this.date);
  }

  private getCurrentCity(): void {
    this.currentCityStoreService.getCity().subscribe(res => (this.currentCity = res));
  }

  private getActiveDate(): void {
    this.activatedRoute.params.subscribe(params => {
      this.date = params.date;
    });
  }
}
