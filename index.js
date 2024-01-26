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

function determineHitType() {
    const roll = rollDice();
    if (roll === 20) return 'Home Run'; // Always a home run on a roll of 20
    if (roll <= 5) return 'Single';
    if (roll <= 10) return 'Double';
    if (roll <= 15) return 'Triple';
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