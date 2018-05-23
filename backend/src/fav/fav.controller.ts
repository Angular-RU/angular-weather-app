import { Body, Controller, Get, Post } from '@nestjs/common';
import { userLoginConst } from 'shared/consts/user-logins.const';

@Controller('toggleFav')
export class ToggleFavController {
  constructor() {}

  @Get()
  checkFav() {
    return 'login is Work';
  }

  @Post()
  async toggleFav(@Body() data) {
    const city = data.city;
    const user = data.user;

    const userData = userLoginConst.find(i => i.login === user);
    if (userData.favourites.find(i => i.title === city.title)) {
      userData.favourites = userData.favourites.filter(i => i.title != city.title);
      return userLoginConst;
    } else {
      userData.favourites.push(data.city);
      return userLoginConst;
    }
  }
}
