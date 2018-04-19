import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { filter, switchMap } from 'rxjs/operators';
import { CitiesModel } from '../../main/shared/models/cities.model';
import { FavouritesCity } from '../../main/shared/models/user.model';
import { HttpService } from '../services/http.service';
import { CurrentUserStoreService } from '../store/current-user.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  selectedCity = new FormControl();
  @Output() choose: EventEmitter<any> = new EventEmitter();
  subscription: Subscription;
  public allCities: CitiesModel[];
  favs: FavouritesCity[];
  constructor(private http: HttpService, private currentUserStoreService: CurrentUserStoreService) {}

  ngOnInit() {
    this.selectedCity.valueChanges
      .pipe(filter(i => i.length > 0), switchMap((data: string) => this.http.getAllCities(data)))
      .subscribe(res => (this.allCities = res));

    this.currentUserStoreService.getuser().subscribe(res => {
      this.favs = res.favourites;
    });
  }
  /** Выбрать город */
  public chooseCity(city: CitiesModel): void {
    this.choose.emit(city);
  }
}
