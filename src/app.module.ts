import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/service/task.service';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from './auth/auth.middleware';
import { TaskController } from './task/controller/task.controller';

@Module({
  imports: [TaskModule],
  controllers: [TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'task', method: RequestMethod.ALL });
  }
}
