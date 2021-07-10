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
    user(email: String!): User

    worker: Birthworker

    birthworkers: [Birthworker]
    birthworker(email: String!): Birthworker

    feelings(email: String): [Feeling]
    feeling(email: String!): Feeling
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
    mood: String
    birthworkerCount: Int
    associateWithWorker: [Birthworker]
    feelings: [Feeling]
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

type Feeling {
    _id: ID
    feelingText: String
    createdAt: String
    email: String
  }

type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    userLogin(email: String!, password: String!): Auth
    mood(mood: String): User

    associateWorker(awwId: ID!): User
    associateUser(awuId: ID!): Birthworker

    addBirthworker(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    workerLogin(email: String!, password: String!): Auth

    addFeeling(feelingText: String!): Feeling
}
`;

// export the typeDefs
module.exports = typeDefs;