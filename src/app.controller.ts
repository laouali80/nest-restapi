import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// the @Controller() decorator define the endpoint of access.
// if it was @Controller('cats'), the endpoint would be http://localhost:3000/cats
// And under this endpoint, we can have different http methods like GET, POST, PUT, DELETE, etc. to perform different operations on the resource (in this case, "cats").
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // we are basicly calling a service method that we implemented in app.services.ts
    return this.appService.getHello();
  }
}
