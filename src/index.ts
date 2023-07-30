import { ApolloServer } from "apollo-server";
import * as MySQLDatabase from './database/mysql.batabase';

// 1
import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
});

const port = 3000;
// 2
server.listen({port}).then(({ url }) => {
  // create database pool
  MySQLDatabase.init();
  console.log(`🚀  Server ready at ${url}`);
});