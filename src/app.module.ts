import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  // The imports array contains all the appplication modules that we want our app to have.
  // e.g: quickauct senario, we would have users module, auctions module, chats module,...
  imports: [UsersModule],
  controllers: [AppController],
  // The AppService is provided as a provider in the AppModule, which allows it to be injected into the AppController and other parts of the application where it is needed.
  providers: [AppService],
})
export class AppModule {}
