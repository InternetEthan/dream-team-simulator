import { useSelector } from 'react-redux';

const Profile = () => {
    const userData = useSelector((state) => {
        return state.users
    })

    console.log("Profile", userData);

    return (
        <div>
            <h1>{ userData }</h1>
        </div>
    );
};

export default Profile;