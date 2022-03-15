import "reflect-metadata"
import express from 'express';
import { 
    ApolloServerPluginLandingPageDisabled,
    ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import dotenv from 'dotenv';
import { schema } from './resolvers'
import { connectToMongoDB } from './utils/mongo';


(async function(){
    // variable environment
    const isDev = process.env.NODE_ENV !== 'production';
    // PORT
    const PORT = process.env.PORT || 4000;
    // get data env
    dotenv.config();
    const app = express();
    const httpServer = http.createServer(app);
    const apolloServer = new ApolloServer({
        context: (ctx) => {
            return ctx
        },
        plugins: [
            isDev ? ApolloServerPluginLandingPageGraphQLPlayground() :
                ApolloServerPluginLandingPageDisabled()
        ],
        schema: await schema
    });
    // before callling apply middleware
    await apolloServer.start();
    // apply app to middleware apollo server
    apolloServer.applyMiddleware({ app, cors: { credentials: true, origin: '*' }, path: '/graphql' });
    // run server
    httpServer.listen({ port: PORT }, () => console.log('server is running at PORT:', PORT));
     // connect to mongoDB
    await connectToMongoDB();
})();