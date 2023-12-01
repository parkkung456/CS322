import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from './service/AuthService';
import './Login.css'
import 'boxicons'

const loginAPIUrl = 'https://hai7owh9ji.execute-api.ap-southeast-2.amazonaws.com/prod/login';
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

const Login = () => {
  
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = (data, event) => {
    event.preventDefault();
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
        window.location.reload();
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
    <div className='loginForm'>
      <div className='loginFormWrapper'>
      <h1>Login</h1>

      {errorMessage && <p className="message">{errorMessage}</p>}
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input-box'>
          <input type="text" {...register('username')} placeholder="Username" />
          <box-icon name='user' type='solid' color='#ffffff' ></box-icon>
          </div>
          <div className='input-box'>
          <input type="password" {...register('password')} placeholder="Password"/>
          <box-icon name='lock-alt' type='solid' color='#ffffff' ></box-icon>
          </div>
          <input type="submit" value="Login" className='btn'/>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
