import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYERS } from '../utils/queries';


const PlayBall = () => {
    const { loading, data } = useQuery(QUERY_PLAYERS, {
    fetchPolicy: "no-cache"});
    // const [players, setPlayers] = useState([])

    console.log(data);

// useState(() => {
//     if (!loading && data) {
//         setPlayers(data.players);
//     }
// }, [loading, data]);

// const roll = (player1, player2) => {
// const player1Score = calculatePlayerScore(player1);
// const player2Score = calculatePlayerScore(player2);
// if (player1Score>player2Score) {
//     return `${player1.name} wins!`;
// } else if (player2Score>player1Score) {
//     return `${player2.name} wins!`;
// } else {
//     return `its a tie!`
// }
// };

// const calculatePlayerScore = (player) => {
//     return player.hitCheck * 10 + player.homeRunCheck *5
// };


  return (
  <div>
    <h1>Baseball Roll</h1>
{/* {
    loading ? (<p>Loading...</p>) : 
    (
    <>
        <h2>Players</h2>
        <ul>
        {players.map(player => (<li key={player.id}> {player.name} </li>))}
        </ul>

        <h2>roll results</h2>
<p>
    {roll(players[0,1])}
</p>
    </>
  )} */}
  </div>
  );
};

export default PlayBall;
