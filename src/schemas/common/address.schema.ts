import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Address {
    @Prop({ required: true })
    address1: string;

    @Prop({ required: true })
    address2: string;

    @Prop()
    city?: string;

    @Prop({ required: true })
    country: string ;

    @Prop()
    state?: string;

    @Prop()
    zipCode?: string
}

export const AddressSchema = SchemaFactory.createForClass(Address)