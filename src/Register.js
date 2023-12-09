import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import './Login.css'
import signup from "./assets/signupPic.svg"
const registerUrl = 'https://hai7owh9ji.execute-api.ap-southeast-2.amazonaws.com/prod/register'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    
    const submitHandler = (event) =>{
        event.preventDefault();
       if(username.trim() === '' || email.trim() ==='' || name.trim() === '' || password.trim() === ''){
        setMessage('All field are required!');
        return;
       }

       const requestConfig ={
        headers:{
            'x-api-key': '2EqoQcFWbq5zdB8b5heuX71Wl5huKS142l0yO0sI'
        }
       }
       const requestBody = {
        username: username,
        email: email,
        name: name,
        password: password
       }      
       
       axios.post(registerUrl, requestBody, requestConfig).then(response => {
        setMessage('Registration Successful');
       }).catch(error => {
        if(error.response.status === 401 || error.response.status === 403){
            setMessage(error.response.data.message);
        } else {
            setMessage('sorry .. backend server is down try again later');
        }
       })
    }


    return (
        <div className='loginForm2'>
            <div className='border2'>
            <div className='loginFormWrapper2'>
                
                <p className='login-header'>Welcome to EcoSort!</p>
                <p className='login-header-label'>Enter your information to use our Waste Sorting AI</p>
            {message && <p className={`message ${message === 'Registration Successful' ? 'success' : ''}`}>{message}</p>}
                <form className='registerForm' onSubmit={submitHandler}>
                <div className='input-box'>
                    <p className='register-name'>Name</p>
                    <input type="text" value={name} onChange={event => setName(event.target.value)} />
                    <box-icon name='id-card' type='regular' color='#464639' ></box-icon>
                </div>
                <div className='input-box'>
                    <p className='register-name'>Email</p>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/> 
                    <box-icon name='envelope' type='regular' color='#464639' ></box-icon>
                </div>
                <div className='input-box'>
                    <p className='register-name'>Username</p>
                    <input type="text" value={username} onChange={event => setUsername(event.target.value)}/>
                    <box-icon name='user' type='regular' color='#464639' ></box-icon> 
                </div>
                <div className='input-box'>
                    <p className='register-name'>Password</p>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <box-icon name='lock-alt' type='regular' color='#464639' ></box-icon>
                </div>
                <input type="submit" value="Register" className="btn"/>
                <p className='to-signup'>Already have an account?<li><NavLink to='/login'>sign in</NavLink></li></p>
                    </form>
            </div>
            <div className='imageContainer2'>
                <img src={signup}/>
            </div>
            </div>
        </div>
    )
}

export default Register;