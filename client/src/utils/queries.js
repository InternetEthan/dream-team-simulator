import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query getUsers {
  users {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
query user($userID: ID!) {
  user(userID: $userID) {
    _id
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

export const QUERY_PLAYERS = gql`
query getPlayers {
  players {
    _id
    name
    hitCheck
    doubleCheck
    tripleCheck
    homeRunCheck
  }
}
`;

export const QUERY_PLAYER = gql`
query player($playerID: ID!) {
  player(playerID: $playerID) {
    _id
    name
    hitCheck
    doubleCheck
    tripleCheck
    homeRunCheck
  }
}
`;