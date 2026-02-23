import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { JobsModule } from './jobs/jobs.module';
import { UsersModule } from './users/users.module';
import { MongooseModelsModule } from './mongoose-model.module';

@Module({
  imports: [
    JobsModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    MongooseModelsModule
  ]
})
export class AppModule { }
