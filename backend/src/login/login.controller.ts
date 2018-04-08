import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  checkLogin() {
    return 'login is Work';
  }

  @HttpCode(204)
  @Post()
  async login(@Res() res, @Body() user: UserDto) {
    if (this.loginService.checkUser(user)) {
      res.status(HttpStatus.OK).send(user);
    } else {
      res.status(HttpStatus.UNAUTHORIZED).send();
    }
  }
}
