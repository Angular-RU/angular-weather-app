import { Component } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { userLoginConst } from '../shared/consts/user-logins.const';
@Component()
export class LoginService {
  public checkUser(user: UserDto) {
    const result = userLoginConst.find(i => i.login === user.login && i.password === user.password);
    return result;
  }
}
