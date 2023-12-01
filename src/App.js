import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PremiumContent from "./PremiumContent";
import React, { useState, useEffect } from "react";
import { getUser, getToken, setUserSession, resetUserSession } from "./service/AuthService";
import axios from "axios";
import PredictApp from "./PredictApp"
import { Navbar } from './components/Navbar';
import  NavbarNotLogin  from './components/NavbarNotLogin';

const verifyTokenAPIURL = 'https://hai7owh9ji.execute-api.ap-southeast-2.amazonaws.com/prod/verify';

function App() {
  
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token === 'undefined' || token === undefined || token === null || !token) {
      setAuthenticating(false);
      return;
    }

    const requestConfig = {
      headers: {
        'x-api-key': '2EqoQcFWbq5zdB8b5heuX71Wl5huKS142l0yO0sI'
      }
    }
    const requestBody = {
      user: getUser(),
      token: token
    }

    axios.post(verifyTokenAPIURL, requestBody, requestConfig).then(response => {
      setUserSession(response.data.user, response.data.token);
      setLoggedIn(true);
      setAuthenticating(false);
    }).catch(() => {
      resetUserSession();
      setAuthenticating(false);
    })
  }, []);
  
  const token = getToken();
  if (isAuthenticating && token) {
    return <div className="content">Authenticating...</div>
  }

  return (
    
    <div className="App">
      <BrowserRouter>
      {isLoggedIn ? <Navbar /> : <NavbarNotLogin />}
        <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/premium-content" element={<PremiumContent />} />
            <Route path="/predict" element={<PredictApp />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
