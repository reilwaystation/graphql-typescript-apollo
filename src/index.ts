// IMPORTS
import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const app = express();

// Create apollo server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  // Wait apollo server
  await apolloServer.start();

  //   add express to apollo
  apolloServer.applyMiddleware({ app });

  //   listen to port
  app.listen({ port: 3000 }, () => console.log("running on port 3000"));
};

startServer();
