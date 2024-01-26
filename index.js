function rollDice(max = 20) {
    return Math.ceil(Math.random() * max);
}

function getHitThreshold(battingAverage) {
    if (battingAverage >= 0.315) return 5;
    if (battingAverage >= 0.285 && battingAverage < 0.314) return 9;
    if (battingAverage >= 0.255 && battingAverage < 0.285) return 12;
    if (battingAverage >= 0.215 && battingAverage < 0.255) return 16;
    return 20; // Batting average lower than .214
}

function isHit(battingAverage) {
    const hitThreshold = getHitThreshold(battingAverage);
    const roll = rollDice();
    if (battingAverage < 0.214) {
        return roll === 20; // Must roll 20 for very low averages
    }
    return roll >= hitThreshold;
}

function determineHitType(playerHits) {
    const totalHits = playerHits.singles + playerHits.doubles + playerHits.triples + playerHits.homeRuns;
    const roll = rollDice();

    const singleThreshold = Math.ceil((playerHits.singles / totalHits) * 20);
    const doubleThreshold = singleThreshold + Math.ceil((playerHits.doubles / totalHits) * 20);
    const tripleThreshold = doubleThreshold + Math.ceil((playerHits.triples / totalHits) * 20);
    // Home runs cover the remaining range

    if (roll <= singleThreshold) return 'Single';
    if (roll <= doubleThreshold) return 'Double';
    if (roll <= tripleThreshold) return 'Triple';
    return 'Home Run';
}

function isStealSuccessful(stealRate) {
    const stealThreshold = Math.ceil(stealRate * 20);
    const roll = rollDice();
    return roll <= stealThreshold;
}

let playerBattingAverage = 0.334;
let playerStealRate = 0.75;

if (isHit(playerBattingAverage)) {
    console.log(`Hit: ${determineHitType()}`);
} else {
    console.log("Out");
}

if (isStealSuccessful(playerStealRate)) {
    console.log("Steal Successful");
} else {
    console.log("Caught Stealing");
}


module.exports = {
    isHit,
    determineHitType,
    isStealSuccessful
};