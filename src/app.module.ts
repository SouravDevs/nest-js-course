import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AlbumsModule } from './albums/albums.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [UsersModule, AlbumsModule, JobsModule]
})
export class AppModule { }
