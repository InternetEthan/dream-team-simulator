import NavBar from '../components/Nav';
import '../Styles/Home.css';

import Auth from '../utils/auth';


const Profile = () => {

if (!Auth.loggedIn()) {
    console.log("not logged in");
    window.location.assign('/login');
    return false;
} else {
    console.log("logged in");
}

    return (
        <div className="center-container">
            <div className="text-center m-3">
            <NavBar />
            <h1>Work in progress</h1>
            <p>Soon you will be able to access a record of previous games, access stats related to those games, and start a new game! </p>
            </div>
        </div>
    );
}

export default Profile;