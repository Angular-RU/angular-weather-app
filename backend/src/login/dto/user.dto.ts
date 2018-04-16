export class UserDto {
  readonly login: string;
  readonly password: string;
  readonly favourites: {
    woeid: number;
    name: string;
  };
}
