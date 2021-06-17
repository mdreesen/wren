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

    me: User
    viewBirthworker: Birthworker

    users: [User]
    user(username: String!): User

    birthworkers: [Birthworker]
    birthworker(username: String!): Birthworker
}

type Auth {
    token: ID!
    user: User
    birthworker: Birthworker
}

type User {
    _id: ID
    username: String
    firstname: String
    lastname: String
    email: String
    password: String
    birthworkerCount: Int
    associateWithWorker: [Birthworker]
}

type Birthworker {
    _id: ID
    username: String
    firstname: String
    lastname: String
    email: String
    password: String
    associateWithUser: [User]
}

type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    userLogin(email: String!, password: String!): Auth

    associateWorker(awwId: ID!): User
    associateUser(awuId: ID!): Birthworker

    addBirthworker(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    workerLogin(email: String!, password: String!): Auth
}
`;

// export the typeDefs
module.exports = typeDefs;