// import the gql tagged template functon
const { gql } = require('apollo-server-express');

// NOTES
// GraphQL uses Queries and Mutations
// Queries is getting data
// Mutations is creating, updating, deleting

// creating typeDefs
const typeDefs = gql `
type Query {
    helloWorld: String
    users: [User]
    user(username: String!): User
}

type User {
    _id: ID
    username: String
    firstname: String
    lastname: String
    email: String
    password: String
}

type Mutation {
    login(email: String!, password: String!): User
    addUser(email: String!, password: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;