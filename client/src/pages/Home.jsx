import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

import { useSelector } from 'react-redux';

const Home = () => {

const userData = useSelector((state) => {
return state.users
})
console.log("home component", userData);


// const {data, loading, error} =  useQuery(QUERY_USERS);

// console.log("data", data)
// console.log("loading", loading)
// console.log("error", error)

  return (
    <div className="">
      <div className="">
        <h1>Welcome to Dream Team!</h1>
      </div>
      <div className="text-center m-3">
        <h2>Let's create your Dream Team!</h2>
        <Link to="/login">
          <button className="">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
