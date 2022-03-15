import { Field, ObjectType } from "type-graphql";
import { getModelForClass,modelOptions, Prop } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions : {
        timestamps : true
    }
})
@ObjectType({ description : 'User schema'})
export class User {
    @Field(type => String)
    @Prop({ required : true})
    username : string
    @Field(type => String)
    @Prop({ required : true})
    email : string
    @Prop({ required : true})
    password : string
}

export const UserModel = getModelForClass(User);

