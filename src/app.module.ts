import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { Config } from './config';

@Module({
  controllers: [UsersController, AlbumsController],
  providers: [
    {
      provide: "DB", useValue: "Moon_Knight"
    },
    {
      provide: "Mail", useValue: ["example@gmail.com", "name@gmail.com"]
    },
    {
      provide: Config, useValue: {
        type: "DEV",
        node: "17"
      }
    }
  ],
})
export class AppModule {}
