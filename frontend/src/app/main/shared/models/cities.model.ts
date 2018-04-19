export class CitiesModel {
  title: string;
  time: string;
  sun_rise: string;
  sun_set: string;
  consolidated_weather: WeatherModel[];
  timezone_name: string;
  parent: Parent;
  sources: Sources[];
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
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
export class Sources {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
}

export class Parent {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}
