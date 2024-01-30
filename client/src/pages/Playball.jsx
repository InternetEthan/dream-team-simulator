import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYERS } from '../utils/queries';



const Playball = () => {
  const { loading, data } = useQuery(QUERY_PLAYERS, {
    fetchPolicy: "no-cache"
  });

console.log(data);


  return (
    <div className="">
      <div className="text-center m-3">
        <h1>Let's create your Dream Team!</h1>
        {/* <button onClick={() => hit(!hit)}> */}
        <button>Hit</button>
      </div>
    </div>
  );
};

export default Playball;
