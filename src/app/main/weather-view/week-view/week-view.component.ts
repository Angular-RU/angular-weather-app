import { Component, OnInit, Input } from '@angular/core';
import { CitiesModel } from '../../shared/models/cities.model';
import { Observable } from 'rxjs/Observable';
import { CurrentCityStoreService } from '../../../core/store/current-city-store.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  @Input() city: CitiesModel;
  currentCity$: Observable<CitiesModel>;
  constructor(private currentCityStoreService: CurrentCityStoreService) {}

  ngOnInit() {
    this.currentCity$ = this.currentCityStoreService.getCity();
  }
}
