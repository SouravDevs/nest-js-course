import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Address {
    @Prop({ required: true })
    address1: string | any;

    @Prop()
    address2: string | any;

    @Prop()
    city?: string;

    @Prop({ required: true })
    country: string | any;

    @Prop()
    state?: string;

    @Prop()
    zipCode?: string
}

export const AddressSchema = SchemaFactory.createForClass(Address)