const { isHit, determineHitType, isStealSuccessful } = require('./index.js');

let currentInning = 1;
const totalInnings = 5;
let topHalf = true; 
let outs = 0;
let score = { team1: 0, team2: 0 };
let baseRunners = { first: false, second: false, third: false };
let team1Lineup = []; 
let team2Lineup = []; 
let currentBatterIndex = { team1: 0, team2: 0 };

function setTeamLineup(teamNumber, lineup) {
    if (teamNumber === 1) {
        team1Lineup = lineup;
    } else if (teamNumber === 2) {
        team2Lineup = lineup;
    }
};


function playTurn() {
    let currentTeam = topHalf ? 'team1' : 'team2';
    let currentBatter = currentTeam === 'team1' ? team1Lineup[currentBatterIndex.team1] : team2Lineup[currentBatterIndex.team2];

    if (isHit(currentBatter.battingAverage)) {
        const hitType = determineHitType(currentBatter.hits);
        console.log(`Hit: ${hitType}`);
        moveRunners(hitType);
    } else {
        console.log("Out");
        nextBatter();
    }
}


let player = {
    battingAverage: [],
    stealRate: [],
    hits: {
        singles: [],
        doubles: [],
        triples: [],
        homeRuns: []
    }
};

function nextBatter() {
    let currentTeam = topHalf ? 'team1' : 'team2';
    currentBatterIndex[currentTeam]++;
    if (currentTeam === 'team1' && currentBatterIndex[currentTeam] >= team1Lineup.length) {
        currentBatterIndex[currentTeam] = 0;
    }
    if (currentTeam === 'team2' && currentBatterIndex[currentTeam] >= team2Lineup.length) {
        currentBatterIndex[currentTeam] = 0;
    }

    outs++;
    if (outs >= 3) {
        outs = 0;
        changeSides();
    }
}


function changeSides() {
    if (topHalf) {
        topHalf = false;
    } else {
        topHalf = true;
        currentInning++;
    }
    baseRunners = { first: false, second: false, third: false };
    if (currentInning > totalInnings) {
        endGame();
    }
};

function moveRunners(hitType) {
    if (hitType === 'Single') {
        if (baseRunners.third) {
            scoreTeamRun();
            baseRunners.third = false;
        }
        if (baseRunners.second) baseRunners.third = true;
        if (baseRunners.first) baseRunners.second = true;
        baseRunners.first = true;
    }
    
};

function scoreTeamRun() {
    if (topHalf) {
        score.team1++;
    } else {
        score.team2++;
    }
};

function endGame() {
    console.log(`Game Over. Final Score - Team 1: ${score.team1}, Team 2: ${score.team2}`);
};

if (isHit(playerBattingAverage)) {
    const hitType = determineHitType();
    console.log(`Hit: ${hitType}`);
    moveRunners(hitType);
} else {
    console.log("Out");
    nextBatter();
};

playTurn(player);