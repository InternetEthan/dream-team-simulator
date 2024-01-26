import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS, {
    fetchPolicy: "no-cache"
  });

const [isSignUp, setSignUp] = useState(false);


  return (
    <div className="">
      <div className="text-center m-3">
        <h1>Let's create your Dream Team!</h1>
        <button onClick={() => setSignUp(!isSignUp)}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </button>
        {isSignUp ? <SignUp /> : <Login />}
      </div>
    </div>
  );
};

export default Home;
