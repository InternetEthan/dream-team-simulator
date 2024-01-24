// resolvers.js
// const { seedUsers } = require('../../server')

const seedUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password1' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password2' },
];

const users = [...seedUsers];

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === Number(id)),
  },
  Mutation: {
    addUser: (_, { name, email, password }) => {
      console.log(name, email, password)
      const newUser = {
        id: users.length + 1,
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
