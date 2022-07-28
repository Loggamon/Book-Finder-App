const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    _id: ID!
    authors: [String]!
    bookId: ID
    image: String
    link: String
    description: String
    title: String
  }

  input bookData {
    authors: [String]!
    bookId: ID
    image: String
    link: String
    description: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook(input: bookData): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
