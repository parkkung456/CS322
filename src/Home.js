import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUser, getToken, setUserSession, resetUserSession } from "./service/AuthService";
import axios from "axios";



import energy from "./assets/energy.svg"
import water from "./assets/water.svg"
import forest from "./assets/forest.svg"
import resource from "./assets/resource.svg"

import eco from "./assets/eco3.svg"
import eco2 from "./assets/eco10.svg"
import color from "./assets/color-code.svg"
import art1 from "./assets/eco9.svg"
import art2 from "./assets/eco1.svg"
import art3 from "./assets/eco7.svg"
import art4 from "./assets/eco2.svg"

import { BsArrowRight } from "react-icons/bs";

import "./components/Home.css"

const verifyTokenAPIURL = 'https://hai7owh9ji.execute-api.ap-southeast-2.amazonaws.com/prod/verify';

const Home = () => {
    const [isAuthenticating, setAuthenticating] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

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
        });

        // Check if the user is logged in and redirect accordingly
        if (isLoggedIn) {
            navigate("/");
        }
    }, [navigate, isLoggedIn]); // Adding navigate and isLoggedIn as dependencies

    const token = getToken();
    if (isAuthenticating && token) {
        return <div className="content">Authenticating...</div>
    }
    
    if (isLoggedIn) {
        navigate("/");
    }

    return (
        <div className="home">
            <main className="landing">
                <div className="content-left">
                    <h1>
                    Our AI waste classification service utilizes technology to contribute an environmentally-friendly approach to waste disposal
                    </h1> 
                    <h2>
                    designed to integrate into existing processes, categorize diverse materials, enhance recycling efficiency and pave the way for a sustainable, circular economy future.
                    </h2>
                    <div className="try-btn">
                        <NavLink className="try-btn" activeclassname="active" to="/signup">Get Started<BsArrowRight /></NavLink>
                    </div>
                </div>
                <div className="content-right">
                    <img src={eco} alt="" height={540} />
                    {/*<Lottie animationData={animation} loop={true}/>*/}
                </div>
            </main>
            <main className="about">
                <h1>Impact Of Sorting Waste</h1>
                <div className="wrapper">
                    <div className="card">
                        <img src={energy} alt="" />
                        <div className="card-text">
                            <h2>Energy Savings</h2>
                            <h3>
                            Recycling materials often requires less energy, resulting in reduced energy consumption and lower greenhouse gas emissions.
                            </h3>
                        </div>  
                    </div>
                    <div className="card">
                        <img src={water} alt="" />
                        <div className="card-text">
                            <h2>Improved Water Quality</h2>
                            <h3>
                            Proper waste sorting prevents hazardous substances from contaminating water, ensuring the health of ecosystems. 
                            </h3>  
                        </div>
                    </div>
                    <div className="card">
                        <img src={forest} alt="" />
                        <div className="card-text">
                            <h2>Protection of Wildlife</h2>
                            <h3>
                            Improper disposal of waste can harm wildlife through ingestion or entanglement. Proper disposal methods help protect animals.
                            </h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={resource} alt="" />
                        <div className="card-text">
                            <h2>Resource Conservation</h2>
                            <h3>
                            Waste sorting conserves natural resources, leading to a more efficient and eco-friendly use of materials.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="color-code">
                    <h1>Color-Coded<br></br>In Thailand</h1>
                    <img src={color} width={900} /> 
                </div>
            </main>
            <main id="#articles" className="articles">
                <h1>Learn how to categorize waste better</h1>
                <div className="article-wrapper">
                    <div className="article-card">
                        <img src={art1}/>
                        <h2>Can I recycle this? Experts advise on what you can and can't put in the recycling bin</h2>
                        <div className="read-btn">
                        <NavLink className="read-btn" activeClassName="active" to={isLoggedIn ? "/articles" : "/login"}>
                            Learn More<BsArrowRight />
                        </NavLink>
                        </div>
                    </div>
                    <div className="article-card">
                        <img src={art3}/>
                        <h2>A Guide to Smart Waste Sorting Technologies: How AI Changes Recycling Globally</h2>
                        <div className="read-btn">
                        <NavLink className="read-btn" activeClassName="active" to={isLoggedIn ? "/articles" : "/login"}>
                            Learn More<BsArrowRight />
                        </NavLink>
                        </div>
                    </div>
                    <div className="article-card">
                        <img src={art2}/>
                        <h2>Waste Sorting 101: An In-Depth Look at the Benefits, Challenges, and Future Trends</h2>
                        <div className="read-btn">
                        <NavLink className="read-btn" activeClassName="active" to={isLoggedIn ? "/articles" : "/login"}>
                            Learn More<BsArrowRight />
                        </NavLink>
                        </div>
                    </div>
                    <div className="article-card">
                        <img src={art4}/>
                        <h2>Empowering Communities: The Journey of Color-Coded Waste Sorting and Their Impact</h2>
                        <div className="read-btn">
                        <NavLink className="read-btn" activeClassName="active" to={isLoggedIn ? "/articles" : "/login"}>
                            Learn More<BsArrowRight />
                        </NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;