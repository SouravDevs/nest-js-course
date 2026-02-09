import { Injectable, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
class EnvConfig {
  envType: "DEV" | "STATE" | "PROD"

  constructor() {
    this.envType = "DEV"
  }
}

function createConnection() {
  new Promise((resolve, promise) => {
    setTimeout(() => {
      console.log("Database connected")
    }, 3000);
  })
}

@Module({
  controllers: [UsersController, AlbumsController],
  providers: [
    {
      provide: "EVENT_STORE",
      useFactory: (config: EnvConfig, limit: number = 4) => {
        console.log(limit)
        const eventBus$ = config.envType === "DEV" ? new ReplaySubject(2) : new BehaviorSubject(null)
        return eventBus$
      }, inject: [{ token: "limit", optional: true }]
    },
    {
      provide: "DB",
      useFactory: async () => {
        const connection = await createConnection()
        return connection;
      }, inject: []
    },
    EnvConfig,
    { provide: "limit", useValue: 2 }
  ]
})
export class AppModule { }
