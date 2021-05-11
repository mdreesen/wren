// importing graphql
import gql from 'graphql-tag';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
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
            email
        }
    }
`;

export const QUERY_ME_BASIC = gql `
    {
        me {
            _id
            username
            email
        }
    }
`;