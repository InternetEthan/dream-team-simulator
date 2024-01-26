import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [login, { error }] = useMutation(LOGIN_USER);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    if (event.target.name === "email"){
      console.log(event.target.value)
      setFormData({...formData, email: event.target.value})
      console.log(formData)
    }
    if (event.target.name === "password"){
      console.log(event.target.value)
      setFormData({...formData, password: event.target.value}) 
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {event.preventDefault(); event.stopPropagation();}

    try{
      const { data } = await login({variables: { ...formData },});
      Auth.login(data.login.token);

    } catch (err) {
      console.error(err);
    }

    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's Login!</h1>
      </div>
      <div className="card-body m-5">
          <form onSubmit={handleFormSubmit}>
            <label>email: </label>
            <input value={formData.email} name="email" onChange={handleInputChange} />
            <label>password: </label>
            <input value={formData.password} name="password" onChange={handleInputChange} />
            <button className="btn btn-danger" type="submit">
              Login
            </button>
          </form>
      </div>
    </div>
  );
};

export default Login;
