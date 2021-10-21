import { gql } from "apollo-server-express";

export default gql`
  type Query {
    answers: [Answer]
    answer: Answer
  }

  type Answer {
    id: Int!
    content: String
    created: String
    user: User
    question: Question
  }
`;
