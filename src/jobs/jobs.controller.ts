import { Body, Controller, Get, Param, ParseArrayPipe, Post, Query, ValidationPipe } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { CreateJobDTO } from "./dto/create-jobs.dto";
import { Paginable } from "./dto/paginable.dto";

@Controller("jobs")
export class JobsController {
    constructor(private jobsService: JobsService) { }

    @Post()
    // @UsePipes(ValidationPipe)
    createJob(@Body(new ParseArrayPipe({ items: CreateJobDTO }), ValidationPipe) createJobDto: CreateJobDTO[]) {
        return this.jobsService.createJob(createJobDto)
    }

    @Get("tags/:id")
    findJobTags(@Query(new ValidationPipe({
        transform: true,
        // dismissDefaultMessages: true,
        // disableErrorMessages: true ,
        whitelist: true,
        // skipMissingProperties: true,
        stopAtFirstError: true
    })) query: Paginable) {
        console.log(query)
        return { success: true }
    }

    @Get(":id")
    findJob(
        @Param("id", new ValidationPipe({
            transform: true,
            // dismissDefaultMessages: true,
            // disableErrorMessages: false,
            // whitelist: true,
            // skipMissingProperties: true,
            // stopAtFirstError: true 
        }))
        id: number
    ) {
        console.log(typeof id)
        return "success"
    }
}