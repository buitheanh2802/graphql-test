import { Field, ObjectType } from "type-graphql";
import { getModelForClass,modelOptions, Prop, Ref } from '@typegoose/typegoose';
import { User } from "./user.schema";
import mongoose from "mongoose";

@modelOptions({
    schemaOptions : {
        timestamps : true
    }
})
@ObjectType({ description : 'Product schema'})
export class Product {
    @Field(type => String)
    @Prop({ required : true})
    name : string
    @Field(type => String)
    @Prop({ required : true})
    desc : string
    @Prop({ required : true})
    @Field(type => String)
    avatar : string
    @Prop({required : true, ref : () => User,type : mongoose.Schema.Types.ObjectId})
    createBy : Ref<User>
}

export const ProductModel = getModelForClass(Product);

