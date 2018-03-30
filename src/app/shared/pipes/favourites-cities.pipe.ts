import { Pipe, PipeTransform } from '@angular/core';
import { CitiesModel } from '../../main/shared/models/cities.model';

@Pipe({
  name: 'favouritesCities'
})
export class FavouritesCitiesPipe implements PipeTransform {
  transform(cities: CitiesModel[], args?: any): CitiesModel[] {
    debugger;
    return cities.filter(i => i.fav);
  }
}
