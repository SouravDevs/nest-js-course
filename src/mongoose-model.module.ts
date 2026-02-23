import { Global, Module } from "@nestjs/common";
import { JOB_MODEL, jobSchema } from "./schemas/job/job.schema";
import { USER_MODEL, userSchema } from "./schemas/user/user.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { PROFILE_MODEL, profileSchema } from "./schemas/profile/profile.schema";

const MODELS = [
    { name: USER_MODEL, schema: userSchema },
    { name: JOB_MODEL, schema: jobSchema },
    { name: PROFILE_MODEL, schema: profileSchema },
]

@Global()
@Module({
    imports: [
        MongooseModule.forFeature(MODELS)
    ],
    exports: [MongooseModule]
})

export class MongooseModelsModule { }