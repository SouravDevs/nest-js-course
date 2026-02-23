import { Module } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { userAgentOptions } from "src/middlewares/user-agent.middleware";
import { InterviewsController } from "./controllers/interviews.controller";
import { JobsService } from "./services/jobs.service";


@Module({
    imports: [],
    controllers: [JobsController, InterviewsController],
    providers: [
        JobsService,
        { provide: userAgentOptions, useValue: ["chrome", "firefox", "postman"] },
    ]
})
export class JobsModule { }