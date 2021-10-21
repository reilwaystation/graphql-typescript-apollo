import { gql } from "apollo-server-express";

export default gql`
  type Query {
    tags: [Tag]
    tag: Tag
  }

  type Tag {
    id: Int!
    name: String
  }
`;
