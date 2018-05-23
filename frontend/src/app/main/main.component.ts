import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../core/services/http.service';
import { CitiesStoreService } from '../core/store/cities-store.service';
import { CurrentCityStoreService } from '../core/store/current-city-store.service';
import { CurrentUserStoreService } from '../core/store/current-user.service';
import { CitiesModel } from './shared/models/cities.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentCity: any;
  allCities$: Observable<CitiesModel[]>;
  selectedCity: FormControl = new FormControl();
  allFavs: any[];
  isFav: boolean;
  constructor(
    private citiesStoreService: CitiesStoreService,
    private currentCityStoreService: CurrentCityStoreService,
    private httpService: HttpService,
    private currentUser: CurrentUserStoreService,
    private currentUserStoreService: CurrentUserStoreService
  ) {}

  ngOnInit() {}

  public chooseCity(city: CitiesModel): void {
    this.currentCity = city;
    this.currentUserStoreService.getuser().subscribe(res => {
      this.allFavs = res.favourites;
    });
    this.isFav = !!this.allFavs.find(i => i.title === city.title);
    this.currentCityStoreService.setCity(city);
  }

  private toggleFav(currentCity) {
    console.log(currentCity);

    const obj = {
      title: currentCity.title,
      woeid: currentCity.woeid
    };

    this.currentUserStoreService.getuser().subscribe(res => (this.currentUser = res.user));
    this.httpService.toggleFav(this.currentUser, obj).subscribe(res => console.log(res));
  }
}
