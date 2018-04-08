import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { LoginService } from './login.service';
import { HttpException } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  checkLogin() {
    return 'login is Work';
  }

  @Post()
  async login(@Body() user: UserDto) {
    if (this.loginService.checkUser(user)) {
      return user;
    } else {
      throw new HttpException('Incorrect login or password', HttpStatus.UNAUTHORIZED);
    }
  }
}
