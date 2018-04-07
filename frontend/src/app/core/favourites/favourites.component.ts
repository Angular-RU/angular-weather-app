import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { CurrentCityStoreService } from '../store/current-city-store.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit, OnDestroy {
  @Input() selectedCity: FormControl;
  @Input() allCities: CitiesModel[];
  @Output() choose: EventEmitter<any> = new EventEmitter();
  subscription: Subscription;
  constructor(private currentCityStoreService: CurrentCityStoreService) {}

  ngOnInit() {
    /** Подписка на выбранный город */
    this.subscription = this.selectedCity.valueChanges.subscribe(res => this.chooseCity(res));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /** Выбрать город */
  public chooseCity(city: CitiesModel): void {
    this.choose.emit(city);
  }
}
