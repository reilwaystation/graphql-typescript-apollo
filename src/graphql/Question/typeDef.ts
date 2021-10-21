import { gql } from "apollo-server-express";

export default gql`
  type Query {
    questions: [Question]
    question: Question
  }

  type Question {
    id: Int!
    content: String
    created: String
    user: User
  }
`;
