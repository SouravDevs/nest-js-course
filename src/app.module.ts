import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { ConfigModule } from '@nestjs/config';

@Module({

  // imports: [JobsModule, ConfigModule.forRoot()]

  // If you have multiple .env file
  imports: [JobsModule, ConfigModule.forRoot({
    envFilePath: [".env"],
    cache: true,
    expandVariables: true,
    isGlobal: true // make this ConfigModule global
  })]
})
export class AppModule { }
