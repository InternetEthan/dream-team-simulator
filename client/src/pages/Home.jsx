import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {

  return (
    <div className="">
      <div className="text-center m-3">
        <h1>Let's create your Dream Team!</h1>
        <Link to="/login">
          <button className="">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
