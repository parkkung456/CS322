import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from './service/AuthService';
import './Login.css'
import 'boxicons'

import loginP from "./assets/loginPic.svg"

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
      <div className='border'>
        <div className='loginFormWrapper'>
        
          <p className='login-header'>EcoSort, Waste Sorting Ai for Good Society</p>
          <p className='login-header-label'>Welcome Back, Please login to your account</p>
            {errorMessage && <p className="message">{errorMessage}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-box'>
              <p className='login-label'>Username</p>
              <input type="text" {...register('username')}/>
              <box-icon name='user'  type='regular' color='#464639' ></box-icon>
            </div>
            <div className='input-box2'>
              <p className='password-label'>Password</p>
              <input className='p-input' type="password" {...register('password')}/>
              <box-icon name='lock-alt' type='regular' color='#464639' ></box-icon>
            </div>
              <input type="submit" value="Login" className='btn'/>
              <p className='to-signup'>Don't have an account? <li><NavLink to='/signup'>sign up</NavLink></li></p>
          </form>
        </div>
        <div className='imageContainer'>
        <img src={loginP}/>
        </div>
      </div>
    </div>
  );
};

export default Login;
//    background: url('/public/background2.jpg') no-repeat;