import { Controller, Get, NotFoundException, Param, ParseIntPipe } from "@nestjs/common";
import { JobsService } from "./jobs.service";

@Controller("jobs")
export class JobsController {
    constructor(private jobsService: JobsService) { }

    @Get(":id")
    getJob(@Param("id", ParseIntPipe) id: number) {
        if(id < 0) {
            // throw new HttpException("Not Found", HttpStatus.NOT_FOUND)
            throw new NotFoundException("Not Found")
        }
        return { success: true }
    }

}