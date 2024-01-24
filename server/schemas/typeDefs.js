const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
  type Player {
    id: ID!
    name: String!
    hitCheck: Int!
    doubleCheck: Int!
    tripleCheck: Int!
    homeRunCheck: Int!
  }
  type Query {
    users: [User]
    user(id: ID!): User
  }
  type Query {
    players: [Player]
    player(id: ID!): Player
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;