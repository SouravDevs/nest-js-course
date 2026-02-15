import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { userAgent, UserAgentMiddleware, userAgentOptions } from "src/middlewares/user-agent.middleware";
import { InterviewsController } from "./controllers/interviews.controller";

@Module({
    controllers: [JobsController, InterviewsController],
    providers: [
        { provide: userAgentOptions, useValue: ["chrome", "firefox", "postman"] }
    ]
})
export class JobsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        //      functional middleware       //
        consumer.apply(userAgent).exclude({ path: "jobs/refs", method: RequestMethod.DELETE}).forRoutes(
        //      For all routes of jobs controller       //
        JobsController)

        //     //  For specific routes //
        //     // { path: "jobs/refs", method: RequestMethod.GET },
        //     // { path: "jobs/refs", method: RequestMethod.POST },
        //     // { path: "jobs/refs", method: RequestMethod.DELETE },
        // )

        //      Class-based middleware      //
        // consumer.apply(UserAgentMiddleware).forRoutes("jobs") // //  For all routes of jobs controller

        // consumer.apply(UserAgentMiddleware).forRoutes("jobs/refs") //  For all routes of jobs/ref (GET, POST, DELETE, PUT)
    }
}