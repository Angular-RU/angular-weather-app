export class UserModel {
  readonly login: string;
  readonly password: string;
  readonly favourites: FavouritesCity[];
}
export class FavouritesCity {
  woeid: number;
  title: string;
}
