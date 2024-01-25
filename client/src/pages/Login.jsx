import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { login } from '../redux/slices/usersSlice';

import Auth from '../utils/auth';

const Login = () => {
  const userData = useSelector((state) => {
    return state.users
  })

  console.log("login component", userData);



  const [addUserMutation, {error}] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    if (event.target.name === "email"){
      setFormData({...formData, email: event.target.value}) 
    }
    if (event.target.name === "password"){
      setFormData({...formData, password: event.target.value}) 
    }
  };

const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addUserMutation({
        variables: { ...formData },
      });

      dispatch(login({ ...formData }));

      // Authenticate user
      const { data } = await Auth.login(formData.email, formData.password);
      console.log(data);
      Auth.login(data.login.token);




    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's Login!</h1>
      </div>
      <div className="card-body m-5">
          <form onSubmit={handleFormSubmit}>
            <label>email: </label>
            <input name="email" onChange={handleInputChange} />
            <label>password: </label>
            <input name="password" onChange={handleInputChange} />
            <button className="btn btn-danger" type="submit">
              Login
            </button>
          </form>
      </div>
    </div>
  );
};

export default Login;
