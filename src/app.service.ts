// This is the AppService class in a NestJS application.
// It is decorated with the @Injectable() decorator, which allows it to be injected as a dependency into other parts of the application, such as controllers or other services. The getHello() method returns a simple string "Hello World!" when called.

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
