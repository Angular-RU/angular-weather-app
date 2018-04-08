import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoginController } from 'login/login.controller';
import { LoginService } from 'login/login.service';

@Module({
  imports: [],
  controllers: [AppController, LoginController],
  components: [LoginService],
})
export class AppModule {}
