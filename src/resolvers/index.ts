import { buildSchema } from 'type-graphql';
import { ProductResolver } from './product.resolver';

export const schema = buildSchema({
    resolvers : [
        ProductResolver
    ],
    validate : false
})