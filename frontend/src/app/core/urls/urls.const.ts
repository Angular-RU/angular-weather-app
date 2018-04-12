export class Urls {
  /** Тестовый url nestJs */
  public static TestNestJs(): string {
    const result = `/backend`;
    return result;
  }

  public static getCurrentWeather(id: number): string {
    const result = `/api/location/${id}/`;
    return result;
  }

  public static getAllCities(query: string): string {
    const result = `/api/location/search/?query=${query}`;
    return result;
  }
}
