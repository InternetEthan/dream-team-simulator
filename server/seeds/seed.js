const db = require('../config/connection');
const { Users } = require('../models');
const { Players } = require('../models');
const cleanDB = require('./cleanDB');

const userData =  require('./userData.json');
const playerData = require('./playerData.json');

db.once('open', async () => {
  await cleanDB('Users', 'users');
  await cleanDB('Players', 'players');

  await Users.insertMany(userData);
  await Players.insertMany(playerData);

  console.log('Users and players seeded!');
  process.exit(0);
});