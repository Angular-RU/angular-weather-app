import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherModel, CitiesModel } from '../../shared/models/cities.model';
import { Observable } from 'rxjs/Observable';
import { CitiesStoreService } from '../../../core/store/cities-store.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  currentDay: CitiesModel;
  city: string;
  date: string;
  allCities$: Observable<CitiesModel[]>;
  allCities: CitiesModel[];
  weather: WeatherModel;
  constructor(private activatedRoute: ActivatedRoute, private citiesStoreService: CitiesStoreService) {}

  ngOnInit() {
    this.allCities$ = this.citiesStoreService.getCities();
    this.citiesStoreService.getCities().subscribe(res => (this.allCities = res));
    this.activatedRoute.params.subscribe(params => {
      this.city = params.city;
      this.date = params.date;
    });
    this.currentDay = this.allCities.find(i => i.title === this.city);
    this.weather = this.currentDay.weather.find(i => i.date === this.date);
  }

  public chooseClass(status: string): string {
    switch (status) {
      case 'sun':
        return 'fa-sun-o';
      case 'cloudy':
        return 'fa-cloud';
    }
  }
}
