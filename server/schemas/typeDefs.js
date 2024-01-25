const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Player {
    _id: ID!
    name: String!
    hitCheck: Int!
    doubleCheck: Int!
    tripleCheck: Int!
    homeRunCheck: Int!
  }
  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }
  type Query {
    players: [Player]
    player(playerId: ID!): Player
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;