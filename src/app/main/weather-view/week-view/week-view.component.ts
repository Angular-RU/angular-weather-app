import { Component, OnInit, Input } from '@angular/core';
import { CitiesModel } from '../../shared/models/cities.model';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  @Input() city: CitiesModel;
  constructor() {}

  ngOnInit() {}
}
