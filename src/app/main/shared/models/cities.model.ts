export class CitiesModel {
  id: number;
  title: string;
  weather: WeatherModel[];
  fav: boolean;
}
export class WeatherModel {
  date: string;
  temp: number;
  status: string;
}
