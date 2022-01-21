import gql from 'graphql-tag';

// -=- USER MUTATIONS -=-
export const LOGIN_USER = gql `
mutation userLogin($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

export const ADD_USER = gql `
mutation($username: String!, $firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    addUser(username: $username, firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
      token
      user {
        _id
        username
        firstname
        lastname
        email
        password
      }
    }
  }
`;

export const ASSOCIATE_WITH_WORKER = gql `
  mutation associateWorker($id: ID!) {
    associateWorker(awwId: $id) {
      _id
      username
      associateWithWorker {
        _id
        username
        firstname
        lastname
        email
      }
    }
  }
`;

export const ASSOCIATE_WITH_USER = gql `
  mutation associateUser($awuId: ID!) {
    associateUser(awuId: $awuId) {
      _id
      username
    }
  }
`;


// -=- BIRTHWORKER MUTATIONS -=-
export const ADD_BIRTHWORKER = gql `
  mutation($username: String!, $firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    addBirthworker(username: $username, firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
      token
      birthworker {
        _id
        username
        firstname
        lastname
        email
        password
      }
    }
  }
`;

export const LOGIN_BIRTHWORKER = gql `
  mutation workerLogin($email: String!, $password: String!) {
    workerLogin(email: $email, password: $password) {
      token
      birthworker {
        _id
        email
      }
    }
  }
`;

