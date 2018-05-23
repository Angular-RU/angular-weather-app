import { Module } from '@nestjs/common';
import { ToggleFavController } from 'fav/fav.controller';
import { LoginController } from 'login/login.controller';
import { LoginService } from 'login/login.service';
import { RegistrationController } from 'registration/registration.controller';
import { RegistrationService } from 'registration/registration.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController, LoginController, RegistrationController, ToggleFavController],
  components: [LoginService, RegistrationService]
})
export class AppModule {}
