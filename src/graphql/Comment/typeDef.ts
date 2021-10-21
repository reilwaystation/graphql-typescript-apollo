import { gql } from "apollo-server-express";

export default gql`
  type Query {
    comments: [Comment]
    comment: Comment
  }

  type Comment {
    id: Int
    content: String
    created: String
    user: User
    answer: Answer
  }
`;
