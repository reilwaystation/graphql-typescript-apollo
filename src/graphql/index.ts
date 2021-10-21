import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { ApolloServer } from "apollo-server-express";

import { userTypeDef, userResolver } from "./User";
import { questionResolver, questionTypeDef } from "./Question";
import { tagResolver, tagTypeDef } from "./Tag";
import { categoryResolver, categoryTypeDef } from "./Category";
import { answerResolver, answerTypeDef } from "./Answer";
import { commentResolver, commentTypeDef } from "./Comment";

// Create apollo server
const apolloServer = new ApolloServer({
  typeDefs: mergeTypeDefs([
    userTypeDef,
    questionTypeDef,
    categoryTypeDef,
    answerTypeDef,
    tagTypeDef,
    commentTypeDef,
  ]),
  resolvers: mergeResolvers([
    userResolver,
    questionResolver,
    categoryResolver,
    answerResolver,
    tagResolver,
    commentResolver,
  ]),
});

export default apolloServer;
