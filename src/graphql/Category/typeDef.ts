import { gql } from "apollo-server-express";

export default gql`
  type Query {
    categories: [Category]
    category: Category
  }

  type Category {
    id: Int!
    name: String
    question: Question
  }
`;
