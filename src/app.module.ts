import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [JobsModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthMiddleware).forRoutes("*") // for each routes globally
    consumer.apply(AuthMiddleware).forRoutes({ path: "*", method: RequestMethod.GET }) // for GET method of every controllers globally
  }
}
