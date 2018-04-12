import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoginController } from 'login/login.controller';
import { LoginService } from 'login/login.service';
import { RegistrationController } from 'registration/registration.controller';
import { RegistrationService } from 'registration/registration.service';

@Module({
  imports: [],
  controllers: [AppController, LoginController, RegistrationController],
  components: [LoginService, RegistrationService]
})
export class AppModule {}
