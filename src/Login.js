import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from './service/AuthService';

const loginAPIUrl = 'https://hai7owh9ji.execute-api.ap-southeast-2.amazonaws.com/prod/login';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = (data) => {
    if (data.username.trim() === '' || data.password.trim() === '') {
      setErrorMessage('Both username and password are required');
      return;
    }

    setErrorMessage(null);

    const requestConfig = {
      headers: {
        'x-api-key': '2EqoQcFWbq5zdB8b5heuX71Wl5huKS142l0yO0sI'
      }
    };

    const requestBody = {
      username: data.username,
      password: data.password
    };

    axios.post(loginAPIUrl, requestBody, requestConfig)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
        navigate('/predict');
      })
      .catch((error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('Sorry, the backend server is down. Please try again later!');
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Login</h5>
        Username: <input type="text" {...register('username')} /> <br />
        Password: <input type="password" {...register('password')} /> <br />
        <input type="submit" value="Login" />
      </form>
      {errorMessage && <p className="message">{errorMessage}</p>}
    </div>
  );
};

export default Login;
