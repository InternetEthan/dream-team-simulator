// schemas.js
const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;