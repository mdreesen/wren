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

    preferredName: String
    language: String
    dateOfBirth: String
    maidenName: String
    placeOfBirth: String
    ssn: String
    maritalStatus: String
    ethnicity: String
    occupation: String
    religion: String
    highestEducation: String
    livingWill: String
    organDonor: String
    culturalPreferences: String
    primaryAddress: String
    secondaryAddress: String
    referral: String
    primaryPhone: String
    secondaryPhone: String
    doNotContactRoute: String
    grantPermission: String
    preferredMethodOfContact: String
    emergencyContact: String

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