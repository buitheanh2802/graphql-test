import { Arg, Args, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class ProductResolver {

    me(){
        return 'ok'
    }
};