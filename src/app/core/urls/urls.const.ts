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
}
