import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS, {
    fetchPolicy: "no-cache"
  });

  return (
    <div className="">
      <div className="text-center m-3">
        <h1>Let's create your Dream Team!</h1>
        <Link to="/login">
          <button className="">Login</button>
        </Link>
        <Link to="/signUp">
          <button className="">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
