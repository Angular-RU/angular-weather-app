import { Component, OnInit } from '@angular/core';
import { CitiesModel } from './shared/models/cities.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() {}
  currentCity: string;
  allCities: CitiesModel[];
  selectedCity: FormControl = new FormControl();
  ngOnInit() {
    this.allCities = [
      {
        id: 1,
        title: 'Москва',
        weather: [
          {
            date: '2018-03-26',
            temp: 1,
            status: 'sun'
          },
          {
            date: '2018-03-27',
            temp: 2,
            status: 'cloudy'
          },
          {
            date: '2018-03-28',
            temp: 1,
            status: 'sun'
          },
          {
            date: '2018-03-29',
            temp: 2,
            status: 'cloudy'
          },
          {
            date: '2018-03-30',
            temp: 1,
            status: 'sun'
          },
          {
            date: '2018-03-31',
            temp: 2,
            status: 'cloudy'
          },
          {
            date: '2018-04-01',
            temp: 2,
            status: 'cloudy'
          }
        ],
        fav: false
      },
      {
        id: 2,
        title: 'Санкт-Петербург',
        weather: [
          {
            date: '2018-03-26',
            temp: 1,
            status: 'sun'
          },
          {
            date: '2018-03-27',
            temp: 2,
            status: 'cloudy'
          },
          {
            date: '2018-03-28',
            temp: 11,
            status: 'sun'
          },
          {
            date: '2018-03-29',
            temp: 2,
            status: 'cloudy'
          },
          {
            date: '2018-03-30',
            temp: 1,
            status: 'sun'
          },
          {
            date: '2018-03-31',
            temp: 2,
            status: 'cloudy'
          },
          {
            date: '2018-04-01',
            temp: 2,
            status: 'cloudy'
          }
        ],
        fav: false
      }
    ];
  }
  public addToFavourite(city: CitiesModel): void {
    city.fav = !city.fav;
  }
  public chooseCity(city) {
    this.currentCity = city;
  }
  public reset(): void {
    this.currentCity = null;
    this.selectedCity.reset();
  }
}
