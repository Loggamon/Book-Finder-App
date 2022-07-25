const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]!
    }
    
    type Book {
        _id: ID
        authors: [String]!
        bookId: String
        image: String
        link: String
        title: String
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        book(bookTitle: String!): Book
        savedBooks(username: String!): [Book]
        me: User
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookTitle: String!):Book
        deleteBook(bookId: ID!): Book
    }`

    module.exports = typeDefs;