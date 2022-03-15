import { MaxLength, MinLength } from "class-validator";
import { ArgsType, Field, InputType } from "type-graphql";

@ArgsType()
export class CreateProductInput{
    @Field(type => String)
    @MinLength(10,{
        message : 'Tối thiểu 10 kí tự'
    })
    @MaxLength(30,{
        message : 'Tối đa 30 kí tự'
    })
    name : string
    @Field()
    @MaxLength(200,{
        message : 'Tối đa 200 kí tự '
    })
    @MinLength(10,{
        message : 'Tối đa 200 kí tự '
    })
    desc : string
    @Field()
    avatar : string
    @Field()
    createBy : string
}