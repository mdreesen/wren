// importing graphql
import gql from 'graphql-tag';

// querying single user
export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
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

export const QUERY_USERS = gql `
  query {
    users {
      _id
      username
      firstname
      lastname
      email
      associateWithWorker {
        username
        firstname
      }
    }
  }
`;

/* Using this query to find associated users */
export const QUERY_ASSOCIATED_USER = gql `
  query {
    users {
      _id
      email
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

// querying single birthworker
export const QUERY_BIRTHWORKER = gql `
query birthworker($username: String!) {
    birthworker(username: $username) {
        _id
        username
        firstname
        lastname
        email
      associateWithUser {
        _id
        username
        firstname
        lastname
        email
      }
    }
  }
`;

// querying all birthworkers
export const QUERY_BIRTHWORKERS = gql `
query {
    birthworkers {
      _id
      username
      firstname
      lastname
      email
    }
  }
`;

// This is a different query
// We are not passing variables to this query
// we can just name this query and graphql will handle it
export const QUERY_ME = gql `
{
    me {
      _id
      username
      firstname
      lastname
      email
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

// querying the logged in user
export const QUERY_ME_BASIC = gql `
{
    me {
      _id
      username
      firstname
      lastname
      email
      birthworkerCount
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

export const QUERY_WORKER_BASIC = gql `
  {
    worker {
      _id
      username
      firstname
      lastname
      email
      associateWithUser {
        _id
        username
        firstname
        lastname
        email
      }
    }
  }
`;