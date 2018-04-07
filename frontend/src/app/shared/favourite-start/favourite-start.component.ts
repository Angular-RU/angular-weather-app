import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite-start',
  templateUrl: './favourite-start.component.html',
  styleUrls: ['./favourite-start.component.scss']
})
export class FavouriteStartComponent implements OnInit {
  constructor() {}
  @Input() city: string;
  @Input() favouritesCities: any[];
  ngOnInit() {}

  public checkFav(): boolean {
    //return this.favouritesCities.includes(this.city);
    return false;
  }
}
