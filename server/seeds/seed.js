const db = require('../config/connection');
const { User } = require('../models');
const { Player } = require('../models');
const cleanDB = require('./cleanDB');

const userData =  require('./userData.json');
const playerData = require('./playerData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Player', 'players');

  await User.insertMany(userData);
  await Player.insertMany(playerData);

  console.log('Users and Players seeded!');
  process.exit(0);
});