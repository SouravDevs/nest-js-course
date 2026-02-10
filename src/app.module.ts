import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController, AlbumsController],
  providers: [UsersService]
})
export class AppModule { }
