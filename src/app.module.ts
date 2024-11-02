import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [UserModuleModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
