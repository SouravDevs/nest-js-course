import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { OCCUPATION } from "src/constants/profile.constants";

@Schema({
    timestamps: true
})
export class Profile {
    @Prop({ required: true })
    firstName: string | any

    @Prop({ required: true })
    lastName: string | any

    @Prop({ required: true })
    age: number | any

    @Prop({ required: true })
    phone: string | any

    @Prop({
        type: String,
        enum: Object.keys(OCCUPATION),
        default: OCCUPATION.STUDENT
    })
    occupation: OCCUPATION | any

    @Prop()
    city?: string | any

    @Prop()
    state?: string | any

    @Prop({ default: "India" })
    country: string | any
}

export const PROFILE_MODEL = Profile.name // Profile

export const profileSchema = SchemaFactory.createForClass(Profile)