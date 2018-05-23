import { UserDto } from 'login/dto/user.dto';

export const userLoginConst: UserDto[] = [
  {
    login: 'admin',
    password: 'root',
    favourites: [
      {
        woeid: 2122265,
        title: 'Moscow'
      },
      {
        woeid: 2123260,
        title: 'St Petersburg'
      }
    ]
  }
];
