const { Users, Players } = require("../models");


const resolvers = {
  Query: {
    users: async () => {
      return Users.findAll({});
    },
    players: async () => {
      return Players.findAll({});
    }
  },
  Mutation: {
    addUser: (_, { name, email, password }) => {
    console.log(name, email, password)
      const newUser = {
        id,
        name,
        email,
        password,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

module.exports = resolvers;
