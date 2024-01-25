import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
    const { userId } = useParams();

    const { loading, data } = useQuery(
        userId ? QUERY_USER : QUERY_ME, {
            variables: { id: userId }
        }
    );

    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
        return <Navigate to="/me" replace />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (!user?.name) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to sign up or log in!
            </h4>
        );
    }

    return (
        <div>
            <h1 className="card-header bg-dark text-center">
                Viewing {user.name}'s profile.
            </h1>
            <div className="card-body m-5">
                <h3 className="card-header bg-dark text-center">About {user.name}</h3>
                <p className="card-text">{user.bio}</p>
                <h3 className="card-header bg-dark text-center">Contact {user.name}</h3>
                <p className="card-text">{user.email}</p>
            </div>
        </div>
    );
};

export default Profile;