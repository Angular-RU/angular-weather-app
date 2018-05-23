export class UserDto {
  readonly login: string;
  readonly password: string;
  favourites: favouritesDto[];
}

export class favouritesDto {
  woeid: number;
  title: string;
}
