import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req } from "@nestjs/common";

@Controller("jobs")
export class JobsController {
    @Get("refs")
    findJobRefs(@Req() req: Request) {
        console.log(req["ua"]) // from middleware
        return { success: true, message: "Job refs list" }
    }

    @Post("refs")
    createJobRef() {
        return { success: true, message: "Job ref created" }
    }

    @Delete("refs")
    deleteJobRef() {
        return { success: true, message: "Job ref deleted" }
    }

    @Put(":jobId")
    updateJobId(@Param("jobId", ParseIntPipe) jobId: number) {
        return { success: true, jobId, message: "Job updated" }
    }
}