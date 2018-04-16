import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { CurrentCityStoreService } from '../store/current-city-store.service';
import { AllCities } from '../../shared/const/mock-cities';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map, switchMap, filter, debounceTime } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { CurrentUserStoreService } from '../store/current-user.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  selectedCity = new FormControl();
  filteredCities: Observable<any[]>;
  @Output() choose: EventEmitter<any> = new EventEmitter();
  subscription: Subscription;
  public allCities: any[];
  favs: any[];
  constructor(private http: HttpService, private currentUserStoreService: CurrentUserStoreService) {}

  ngOnInit() {
    this.selectedCity.valueChanges
      .pipe(filter(i => i.length > 0), switchMap((data: string) => this.http.getAllCities(data)))
      .subscribe(res => (this.allCities = res));

    this.currentUserStoreService.getuser().subscribe(res => {
      debugger;
      this.favs = res.favourites;
    });
    console.log(this.favs);
  }
  /** Выбрать город */
  public chooseCity(city: CitiesModel): void {
    this.choose.emit(city);
  }
}
