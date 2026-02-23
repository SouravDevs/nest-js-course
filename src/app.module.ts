import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    JobsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule
  ]
})
export class AppModule { }
