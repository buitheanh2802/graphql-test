import { Product } from '../models/product.schema';
import { Arg, Args, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { CreateProductInput } from '../type/product.type';

@Resolver()
export class ProductResolver {

    @Query(returns => Product, { nullable: true })
    me() {
        return {
            id: '1',
            name: 'bui the anh',
            password: '123455'
        }
    }

    @Mutation(returns => Product,{ nullable : true })
    create(@Args() input : CreateProductInput){
        console.log(input);
        // console.log(input.name);
        
        return input
    }
};