import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';

import { HttpException } from '@nestjs/common';
import { UserDto } from '../login/dto/user.dto';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Get()
  checkLogin() {
    return 'registration is Work';
  }

  @Post()
  async registration(@Body() user: UserDto) {
    if (this.registrationService.addUser(user)) {
      return user;
    }
    throw new HttpException('Incorrect login or password', HttpStatus.UNAUTHORIZED);
  }
}
