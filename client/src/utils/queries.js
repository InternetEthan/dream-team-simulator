import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query getUsers {
  users {
    id
    name
  }
}
`;

export const QUERY_USER = gql`
query user($userID: ID!) {
  user(userID: $userID) {
    id
    name
  }
}
`;

export const QUERY_ME = gql`
query me {
  me {
    _id
    name
  }
}
`;