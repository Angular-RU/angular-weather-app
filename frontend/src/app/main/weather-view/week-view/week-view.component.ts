import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../core/services/http.service';
import { CurrentCityStoreService } from '../../../core/store/current-city-store.service';
import { CitiesModel } from '../../shared/models/cities.model';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  currentCity$: Observable<CitiesModel>;
  toggle = new FormControl();
  constructor(private currentCityStoreService: CurrentCityStoreService, private httpService: HttpService) {}

  ngOnInit() {
    this.currentCity$ = this.currentCityStoreService.getCity();
  }
}
