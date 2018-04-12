import { Component } from '@nestjs/common';
import { userLoginConst } from '../shared/consts/user-logins.const';

@Component()
export class RegistrationService {
  public addUser(user): boolean {
    if (this.canBeRegistration(user)) {
      userLoginConst.push({ login: user.login, password: user.password });
      console.log(userLoginConst);

      return true;
    }
    return false;
  }
  private canBeRegistration(user): boolean {
    if (userLoginConst.find(i => i.login === user.login)) {
      return false;
    }
    return true;
  }
}
