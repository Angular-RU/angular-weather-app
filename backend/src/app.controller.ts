import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  checkBackend() {
    return 'NestJs is Work';
  }
}
