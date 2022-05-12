require("dotenv").config({ path: __dirname + '..\\..\\.env' });

import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { ApolloServer } from 'apollo-server';
import * as database from './config/database.config';
import { categoryResolver } from "./modules/category/category.resolver";
import { categorySchema } from "./modules/category/category.schema";
import { productResolver } from "./modules/product/product.resolver";
import { productSchema } from "./modules/product/product.schema";


const main = async () => {
    // connect to mongoDB
    database.connect();

    const typeDefs = mergeTypeDefs([categorySchema, productSchema]);
    const resolvers = mergeResolvers([categoryResolver, productResolver]);

    const server = new ApolloServer({
        resolvers,
        typeDefs,
    })

    server.listen({ port: process.env.PORT }).then(({ url }) => {
        console.log(`[Info] Server ready at ${url}`)
    })
}

main()