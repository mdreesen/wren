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

    me: User

    birthworkers: [Birthworker]
    birthworker(username: String): Birthworker
}

type Auth {
    token: ID!
    user: User
}

type Workerauth {
    token: ID!
    birthworker: Birthworker
}

type User {
    _id: ID
    username: String
    firstname: String
    lastname: String
    email: String
    password: String
}

type Birthworker {
    _id: ID
    username: String
    firstname: String
    lastname: String
    email: String
    password: String
}

type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    userLogin(email: String!, password: String!): Auth

    addBirthworker(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    loginBirthworker(email: String!, password: String!): Auth
}
`;

// export the typeDefs
module.exports = typeDefs;