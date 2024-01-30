const { User, Player } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");


const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId});
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id } );
      }
      throw AuthenticationError;
    },

    players: async () => {
      return Player.find({});
    },

    player: async (parent, { playerId }) => {
      return Player.findOne({ _id: playerId});
    },


  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      console.log(token, user)
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      // console.log(email, password)
      const user = await User.findOne({ email } );
      console.log(user)
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    }
  },
};

module.exports = resolvers;
