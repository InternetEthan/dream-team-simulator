import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { addUser } from '../redux/store';

const Login = () => {
const userData = useSelector((state) => {
return state.users
})
console.log("login component", userData);


  const [addUserMutation, {error}] = useMutation(ADD_USER);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    if (event.target.name === "name"){
      setFormData({...formData, name: event.target.value}) 
    }
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
      await addUserMutation ({
        variables: {...formData}
      })
      dispatch(addUser({...formData}))
      navigate(`/profile`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create an account!</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <label>name: </label>
          <input name="name" onChange={handleInputChange} />
          <label>email: </label>
          <input name="email" onChange={handleInputChange} />
          <label>password: </label>
          <input name="password" onChange={handleInputChange} />
          <button className="btn btn-danger" type="submit">
            create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
