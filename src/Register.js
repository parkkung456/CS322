import React, { useState } from "react";
import axios from 'axios';

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
        <div className='loginForm'>
            <div className='loginFormWrapper'>
            <h1>Register</h1>
            {message && <p className={`message ${message === 'Registration Successful' ? 'success' : ''}`}>{message}</p>}
                <form className='registerForm' onSubmit={submitHandler}>
                <div className='input-box'>
                    <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Name"/>
                    <box-icon name='id-card' type='solid' color='#ffffff' ></box-icon>
                </div>
                <div className='input-box'>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email"/> 
                    <box-icon name='envelope' type='solid' color='#ffffff' ></box-icon>
                </div>
                <div className='input-box'>
                    <input type="text" value={username} onChange={event => setUsername(event.target.value)} placeholder="Username"/>
                    <box-icon name='user' type='solid' color='#ffffff' ></box-icon> 
                </div>
                <div className='input-box'>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password"/>
                <box-icon name='lock-alt' type='solid' color='#ffffff' ></box-icon>
                </div>
                <input type="submit" value="Register" className="btn"/>
                    </form>
            </div>
        </div>
    )
}

export default Register;