import { Component, OnInit, Input } from '@angular/core';
import { CitiesModel } from '../../shared/models/cities.model';
import { Observable } from 'rxjs/Observable';
import { CurrentCityStoreService } from '../../../core/store/current-city-store.service';
import { HttpService } from '../../../core/services/http.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  @Input() city: CitiesModel;
  currentCity: any;
  constructor(private currentCityStoreService: CurrentCityStoreService, private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getWeather(44418).subscribe(res => {
      this.currentCity = res;
    });
  }
}
