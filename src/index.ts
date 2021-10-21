// IMPORTS
import express from "express";
import graphql from "./graphql";
import database from "./database";

const app = express();

// START SERVER
const main = async () => {
  // initialize typeorm
  await database();

  // Wait apollo server
  await graphql.start();

  //   add express to apollo
  graphql.applyMiddleware({ app });

  //   listen to port
  app.listen({ port: 3000 }, () => console.log("running on port 3000"));
};

main();
