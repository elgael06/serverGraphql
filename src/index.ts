import { ApolloServer } from "apollo-server";
import * as MySQLDatabase from './database/mysql.batabase';
import { schema } from "./schema";

export const server = new ApolloServer({
    schema,
});

const port = 3000;

server.listen({port}).then(({ url }) => {
  MySQLDatabase.init();
  console.log(`🚀  Server ready at ${url}`);
});