import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Address, AddressSchema } from "../common/address.schema";
import { JOB_TYPE } from "src/constants/job.constants";
import { Types } from "mongoose";
import { User, USER_MODEL } from "../user/user.schema";

export class Job {
    @Prop({ type: Types.ObjectId, ref: USER_MODEL, required: true })
    employer: string | Types.ObjectId | User | any

    @Prop({ required: true })
    companyName: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    experience: number;

    @Prop({ default: [] })
    tags?: string[];

    @Prop()
    salary?: string;

    @Prop({
        type: String,
        enum: Object.keys(JOB_TYPE),
        required: true
    })
    type: JOB_TYPE;

    @Prop({ type: AddressSchema, required: true })
    location: Address
}

export const JOB_MODEL = Job.name // Job

export type JobDocument = Job & Document;

export const jobSchema = SchemaFactory.createForClass(Job)