const db = require('../config/connection');
const { User } = require('../models');
const { Player } = require('../models');
const cleanDB = require('./cleanDB');

const userData =  require('./userData.json');
const playerDataLegends = require('./playerDataLegends.json');
const playerDataModern = require('./playerDataModern.json');

const seedLegends = async (pId) => {
  await seedPlayers(pId, 'Legend');
};

const seedModern = async(pId) => {
  await seedPlayers(pId, 'Modern');
}

const seedPlayers = async(pId, type) => {
  const response = await fetch(`https://statsapi.mlb.com/api/v1/people?personIds=${pId.key_mlbam}&hydrate=stats(group%3D%5Bhitting%5D,type%3D%5Bcareer%5D)`)
    const data = await response.json();
    const player = data.people[0];
    const stats = player.stats[0].splits[0].stat;

    const playerName = player.fullName;
    const cardImg = `${player.nameSlug}.png`
    const hit = Math.round(21 - stats.avg * 20);
    const homerun = Math.min(21 - Math.round(stats.homeRuns / stats.hits * 20), 20);
    const triple = Math.min(homerun - Math.round(stats.triples / stats.hits * 20), homerun - 1);
    const double = Math.min(triple - Math.round(stats.doubles / stats.hits * 20), triple - 1);
    const steal = Math.max(Math.min(21 - Math.round(stats.stolenBasePercentage * 20), 20), 1) || 10;
    
    console.log({
      name: playerName,
      imageName: cardImg,
      playerType: type,
      hitCheck: hit,
      doubleCheck: double,
      tripleCheck: triple,
      homeRunCheck: homerun,
      stealBaseCheck: steal
    });
    await Player.insertMany({
      name: playerName,
      imageName: cardImg,
      playerType: type,
      hitCheck: hit,
      doubleCheck: double,
      tripleCheck: triple,
      homeRunCheck: homerun,
      stealBaseCheck: steal
    })
}

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Player', 'players');

  await User.insertMany(userData);
  
  // Process all Legend players
  await Promise.all(playerDataLegends.map(seedLegends));
  await Promise.all(playerDataModern.map(seedModern));

  console.log('Users and Players seeded!');
  process.exit(0);
});