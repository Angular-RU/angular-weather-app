import {
  Get,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';

class UserDto {
  login: string;
  password: string;
}

@Controller()
export class AppController {
  public MyUsers: UserDto[] = [
    { login: 'admin', password: 'root' },
    { login: 'glotov', password: 'glotov' },
  ];

  @HttpCode(204)
  @Post()
  async addUser(@Res() res, @Body() user: UserDto) {
    if (this.checkUser(user)) {
      res.status(HttpStatus.OK).send(user);
    } else {
      res.status(HttpStatus.UNAUTHORIZED).send('not auth');
    }
  }

  private checkUser(user: UserDto) {
    const result = this.MyUsers.find(
      i => i.login === user.login && i.password === user.password,
    );
    return result;
  }
}
