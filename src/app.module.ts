import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/service/task.service';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule {}
