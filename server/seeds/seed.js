const db = require('../config/connection');
const { Users } = require('../models');
const { Players } = require('../models');
const cleanDB = require('./cleanDB');

const userData =  require('./userData.json');
const playerData = require('./playerData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Players', 'players');

  await User.insertMany(userData);
  await Player.insertMany(playerData);

  console.log('Users and players seeded!');
  process.exit(0);
});