import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Address, AddressSchema } from "../common/address.schema";
import { JOB_TYPE } from "src/constants/job.constants";
import { Types } from "mongoose";
import { User, USER_MODEL } from "../user/user.schema";

export class Job {
    @Prop({ type: Types.ObjectId, ref: USER_MODEL, required: true })
    employer: string | Types.ObjectId | User | any

    @Prop({ required: true })
    companyName: string | any;

    @Prop({ required: true })
    title: string | any;

    @Prop({ required: true })
    description: string | any;

    @Prop({ required: true })
    experience: number | any;

    @Prop({ default: [] })
    tags?: string[];

    @Prop()
    salary?: string;

    @Prop({
        type: String,
        enum: Object.keys(JOB_TYPE),
        required: true
    })
    type: JOB_TYPE | any;

    @Prop({ type: AddressSchema, required: true })
    location: Address | any
}

export const jobSchema = SchemaFactory.createForClass(Job)