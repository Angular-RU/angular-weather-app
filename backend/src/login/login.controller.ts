import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  checkLogin() {
    return 'login is Work';
  }

  @Post()
  async login(@Body() user: UserDto) {
    const result = this.loginService.checkUser(user);
    if (result) {
      return {
        user: result.login,
        favourites: result.favourites
      };
    } else {
      throw new HttpException('Incorrect login or password', HttpStatus.UNAUTHORIZED);
    }
  }
}
