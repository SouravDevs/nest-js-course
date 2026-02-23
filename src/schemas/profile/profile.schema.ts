import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { OCCUPATION } from "src/constants/profile.constants";

@Schema({
    timestamps: true
})
export class Profile {
    @Prop({ required: true })
    firstName: string

    @Prop({ required: true })
    lastName: string

    @Prop({ required: true })
    age: number

    @Prop({ required: true })
    phone: string

    @Prop({
        type: String,
        enum: Object.keys(OCCUPATION),
        default: OCCUPATION.STUDENT
    })
    occupation: OCCUPATION

    @Prop()
    city?: string

    @Prop()
    state?: string

    @Prop({ default: "India" })
    country: string
}

export const PROFILE_MODEL = Profile.name // Profile

export type ProfileDocument = Document & Profile

export const profileSchema = SchemaFactory.createForClass(Profile)