import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ACCOUNT_STATUS, ACCOUNT_TYPE } from "src/constants/account.constants";
import { Address, AddressSchema } from "../common/address.schema";

@Schema({
    timestamps: true,
    // collection: "users" 
})
export class User {
    @Prop({ required: true })
    name: string | any;

    @Prop({ required: true })
    email: string | any

    @Prop({ required: true, select: false })
    password: string | any

    age?: number

    phone?: string

    @Prop({
        type: String,
        enum: Object.keys(ACCOUNT_STATUS),
        default: ACCOUNT_STATUS.ACTIVE
    })
    status?: ACCOUNT_STATUS;

    @Prop({
        type: String,
        enum: Object.keys(ACCOUNT_TYPE),
        immutable: true,
        required: true
    })
    accountType: ACCOUNT_TYPE | any;

    @Prop({ default: [] })
    social?: string[];

    @Prop({ default: false })
    isEmailVerified?: boolean;

    @Prop({ type: AddressSchema, required: true })
    address: Address | any;

    @Prop(raw({
        reference: { type: String },
        beta: { type: Boolean }
    }))
    metadata?: Record<string, any> | any
}

export const USER_MODEL = User.name // User

export const userSchema = SchemaFactory.createForClass(User)
