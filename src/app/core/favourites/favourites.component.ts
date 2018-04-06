import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CitiesModel } from '../../main/shared/models/cities.model';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  @Input() selectedCity: FormControl;
  @Input() allCities: CitiesModel[];
  @Output() choose: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    /** Подписка на выбранный город */
    this.selectedCity.valueChanges.subscribe(res => this.chooseCity(res));
  }

  /** Выбрать город */
  public chooseCity(city: string): void {
    this.choose.emit(city);
  }

  /**Отфильтровать все => избранные */
  public favouritesCities(): CitiesModel[] {
    return this.allCities.filter(i => i.fav);
  }
}
