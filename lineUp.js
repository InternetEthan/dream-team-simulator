const mockPlayers = [
    { id: 1, name: 'Player A', position: 'Outfield' },
    { id: 2, name: 'Player B', position: 'Infield' },
];

async function fetchAllPlayers() {
    // This will be replaced with an API call to player 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockPlayers);
        }, 1000); 
    });
};

function getRandomSubset(players, count) {
    const shuffled = players.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

function generatePlayerOptions() {
    const allPlayers = await fetchAllPlayers();
    const positionPlayers = allPlayers.filter(player => player.position !== 'Pitcher');
    return getRandomSubset(positionPlayers, 30);
};

function selectPlayersForTeam(playerOptions) {
    let selectedPlayers = getRandomSubset(playerOptions, 14); 
    return {
        lineup: selectedPlayers.slice(0, 9), // Starting 9 for the lineup
        bench: selectedPlayers.slice(9) // 5 go to the bench
    };
};

function setBattingOrder(team, order) {s
    if (order.length !== 9 || !order.every(id => team.lineup.some(player => player.id === id))) {
        throw new Error("Invalid batting order");
    }
    team.battingOrder = order;
};

function substitutePlayer(team, currentBatterId, substituteId) {
    const currentBatterIndex = team.battingOrder.indexOf(currentBatterId);
    const substituteIndex = team.bench.findIndex(player => player.id === substituteId);

    if (currentBatterIndex === -1 || substituteIndex === -1) {
        throw new Error("Invalid substitution");
    }

    team.battingOrder[currentBatterIndex] = substituteId;
    [team.lineup[currentBatterIndex], team.bench[substituteIndex]] = [team.bench[substituteIndex], team.lineup[currentBatterIndex]];
}
