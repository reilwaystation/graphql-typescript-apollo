import { gql } from "apollo-server-express";

export default gql`
  type Query {
    users(
      limit: Int
      offset: Int
      order: UserSort
      filter: UserFilter
    ): UserDataset
    user(filter: UserFilter): User
  }

  type Mutation {
    createUser(payload: UserInput): User
    updateUser(payload: UserInput): User
    deleteUser(payload: UserInput): User
  }

  #OUTPUT TYPES
  type UserDataset {
    count: Int
    dataset: [User]
  }

  type User {
    id: Int
    email: String
    firstName: String
    lastName: String
    userName: String
    password: String
    isActive: Boolean
    isAdmin: Boolean
    created: String
    question: Question
    answer: Answer
    comment: Comment
  }

  #INPUT TYPES
  input UserSort {
    id: String
    email: String
    firstName: String
    lastName: String
    userName: String
    password: String
    isActive: String
    isAdmin: String
    created: String
  }

  input UserFilter {
    id: Int
    email: String
    firstName: String
    lastName: String
    userName: String
    password: String
    isActive: Boolean
    isAdmin: Boolean
    created: String
  }

  input UserInput {
    email: String
    firstName: String
    lastName: String
    userName: String
    password: String
  }
`;

/*
output types
input types
input types for sorting
input types for filter
*/
