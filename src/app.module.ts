import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UsersStore } from './users.store';

@Module({
  controllers: [UsersController, AlbumsController],
  providers: [UsersStore],
})
export class AppModule {}
