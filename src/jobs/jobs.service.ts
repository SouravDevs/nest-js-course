import { Injectable } from "@nestjs/common";
import { CreateJobDTO } from "./dto/create-jobs.dto";

@Injectable()
export class JobsService {
    createJob(createJobDto: CreateJobDTO[]) {
        return createJobDto
    }
}