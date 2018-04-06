import { Component, OnInit, Input } from '@angular/core';
import { CitiesModel } from '../../../shared/models/cities.model';

@Component({
  selector: 'app-week-view-card',
  templateUrl: './week-view-card.component.html',
  styleUrls: ['./week-view-card.component.scss']
})
export class WeekViewCardComponent implements OnInit {
  constructor() {}
  @Input() city: CitiesModel;
  ngOnInit() {}

  public chooseClass(status: string): string {
    switch (status) {
      case 'sun':
        return 'fa-sun-o';
      case 'cloudy':
        return 'fa-cloud';
    }
  }
  public detailView(item: CitiesModel): void {
    console.log('Redirect to detail view', item);
  }
}
