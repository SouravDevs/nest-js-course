import { Body, Controller, Get, Param, ParseArrayPipe, ParseEnumPipe, ParseUUIDPipe, Put, Query } from '@nestjs/common';

enum JobType {
    FULL_TIME,
    PART_TIME
}

@Controller('jobs')
export class JobsController {

    @Get("search")
    findJobsById(@Query("id", new ParseArrayPipe({ items: Number, separator: "-"})) ids: number[]) {
        console.log(ids)
        return ids
    }

    @Get(":id")
    findJobById(@Param("id",) id: number) {

    }

    @Put("salary/:id")
    incSalary(@Param("id") id: number, @Query("increment") inc: number) {

    }

    @Put("active/:id")
    toggleJobActiveStatus(@Param("id") id: number, @Body("active") active: boolean) {

    }

    @Put("exp/:id")
    setUpdateJobExp(@Param("id") id: number, @Body("exp") exp: number) {

    }

    @Get("ref/:refId")
    findJobByRefId(@Param("refId", new ParseUUIDPipe({ version: '4'})) id: string) {

    }

    @Put("type/:id")
    toggleJobType(@Param("id") id: number, @Body("type", new ParseEnumPipe(JobType)) type: JobType) {

    }
}

// ParseUUIDPipe -> Default version - 4
// new ParseUUIDPipe({ version: '3'}) -> Set version to 3
// new ParseEnumPipe(JobType) -> For enumerations
// new ParseArrayPipe({ items: Number}) -> Approve array of numbers
//  new ParseArrayPipe({ items: Number, separator: "-"}) -> Separator "-" only for http://localhost:3000/jobs/search/?id=10-2-1