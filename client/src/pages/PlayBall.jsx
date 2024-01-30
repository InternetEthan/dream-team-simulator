import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYERS } from '../utils/queries';
import NavBar from '../components/Nav';
import '../Styles/Home.css';

const PlayBall = () => {
  const { loading, error, data } = useQuery(QUERY_PLAYERS, {
    fetchPolicy: 'no-cache',
  });

  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setPlayers(data.players);
    }
  }, [loading, data]);

  useEffect(() => {
    if (players.length >= 2) {
      const randomIndex1 = Math.floor(Math.random() * players.length);
      let randomIndex2;
      do {
        randomIndex2 = Math.floor(Math.random() * players.length);
      } while (randomIndex2 === randomIndex1);

      setSelectedPlayers([players[randomIndex1], players[randomIndex2]]);
    }
  }, [players]);

  const roll = () => {
    if (selectedPlayers.length === 2) {
      const player1Score = calculatePlayerScore(selectedPlayers[0]);
      const player2Score = calculatePlayerScore(selectedPlayers[1]);

      if (player1Score > player2Score) {
        return `${selectedPlayers[0].name} wins!`;
      } else if (player2Score > player1Score) {
        return `${selectedPlayers[1].name} wins!`;
      } else {
        return `It's a tie!`;
      }
    }

    return 'Not enough players selected.';
  };

  const calculatePlayerScore = (player) => {
    return player.hitCheck * 10 + player.homeRunCheck * 5;
  };

  const handleRoll = () => {
    // Select new players
    if (players.length >= 2) {
      const randomIndex1 = Math.floor(Math.random() * players.length);
      let randomIndex2;
      do {
        randomIndex2 = Math.floor(Math.random() * players.length);
      } while (randomIndex2 === randomIndex1);

      setSelectedPlayers([players[randomIndex1], players[randomIndex2]]);
    }
  };

  return (
    <div className="center-container">
      <div className="text-center m-3">
        <NavBar />
        <h1>Baseball Roll</h1>
        {loading ? (
          <p>Loading player data...</p>
        ) : error ? (
          <p>Error fetching player data</p>
        ) : (
          <>
            <h2>Selected Players</h2>
            <ul>
              {selectedPlayers.map((player) => (
                <li key={player._id}> {player.name} </li>
              ))}
            </ul>

            {selectedPlayers.length === 2 && <p>{roll()}</p>}
            <button onClick={handleRoll}>Roll</button>
            <button onClick={() => setSelectedPlayers([])}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayBall;