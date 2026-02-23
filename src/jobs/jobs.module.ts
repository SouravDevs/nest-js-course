import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { UserAgentMiddleware, userAgentOptions } from "src/middlewares/user-agent.middleware";
import { InterviewsController } from "./controllers/interviews.controller";
import { AuthMiddleware } from "src/middlewares/auth.middleware";
import { JobsService } from "./services/jobs.service";


@Module({
    imports: [],
    controllers: [JobsController, InterviewsController],
    providers: [
        JobsService,
        { provide: userAgentOptions, useValue: ["chrome", "firefox", "postman"] },
    ]
})
export class JobsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware, UserAgentMiddleware).forRoutes(JobsController)
    }
}