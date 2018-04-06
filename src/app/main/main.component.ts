import { Component, OnInit } from '@angular/core';
import { CitiesModel } from './shared/models/cities.model';
import { FormControl } from '@angular/forms';
import { CitiesStoreService } from '../core/store/cities-store.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { CurrentCityStoreService } from '../core/store/current-city-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentCity: CitiesModel;
  allCities$: Observable<CitiesModel[]>;
  selectedCity: FormControl = new FormControl();
  constructor(
    private citiesStoreService: CitiesStoreService,
    private currentCityStoreService: CurrentCityStoreService
  ) {}

  ngOnInit() {
    this.allCities$ = this.citiesStoreService.getCities();
  }
  public addToFavourite(city: CitiesModel): void {
    city.fav = !city.fav;
  }
  public chooseCity(city: CitiesModel) {
    this.currentCity = city;
    this.currentCityStoreService.setCity(city);
  }
  public reset(): void {
    this.currentCity = null;
    this.selectedCity.reset();
  }
}
