export class CitiesModel {
  id: number;
  title: string;
  consolidated_weather: any[];
}
export class WeatherModel {
  air_pressure: number;
  applicable_date: string;
  created: string;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
}
