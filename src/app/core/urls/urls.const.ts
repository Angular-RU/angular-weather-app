const basehref = 'http://localhost:4200';
export class Urls {
  /** Тестовый url nestJs */
  public static TestNestJs(): string {
    const result = `${basehref}/backend`;
    return result;
  }

  public static getCurrentWeather(id: number): string {
    const result = `${basehref}/api/location/${id}/`;
    return result;
  }
}
