import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import '../Styles/Home.css';
import logo from '../assets/logo.png';
import NavBar from '../components/Nav';


const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS, {
    fetchPolicy: "no-cache"
  });

const [isSignUp, setSignUp] = useState(false);


  return (
    <div className="center-container">
      <div className="text-center m-3">
        <div><NavBar/></div>
        <img src={logo} width={350} height={350} alt="logo"/>
        <h1>Let's create your Dream Team!</h1>
          <div className="button-container">
          <button onClick={() => setSignUp(!isSignUp)}>
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </div>
        {isSignUp ? <SignUp /> : <Login />}
      </div>
    </div>
  );
};

export default Home;
