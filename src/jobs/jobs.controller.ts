import { Body, Controller, DefaultValuePipe, Get, Param, ParseBoolPipe, ParseFloatPipe, ParseIntPipe, Put, Query } from '@nestjs/common';

enum JobType {
    FULL_TIME,
    PART_TIME
}

@Controller('jobs')
export class JobsController {

    @Get(":id")
    findJobById(@Param("id", ParseIntPipe) id: number) {
        console.log(typeof id)
        return "Success"
    }

    // Explicitly set status code
    // findJobById(@Param("id", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
    //     console.log(typeof id)
    //     return "Success"
    // }

    @Put("salary/:id")
    // @UsePipes(ParseIntPipe)
    incSalary(@Param("id", ParseIntPipe) id: number, @Query("increment", ParseFloatPipe) inc: number) {
        return "Success salary/:id"
    }

    @Put("active/:id")
    toggleJobActiveStatus(
        @Param("id", ParseIntPipe) id: number,
        @Body("active", ParseBoolPipe) active: boolean
    ) {

    }

    @Put("exp/:id")
    setUpdateJobExp(@Param("id", ParseIntPipe) id: number, @Body("exp", new DefaultValuePipe(2), ParseIntPipe) exp: number) {

    }

    @Get("ref/:refId")
    findJobByRefId(@Param("refId") id: string) {

    }

    @Put("type/:id")
    toggleJobType(@Param("id") id: number, @Body("type") type: JobType) {

    }
}

// ParseIntPipe
// ParseBoolPipe
// new DefaultValuePipe(2) -> to set default value