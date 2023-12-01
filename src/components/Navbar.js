import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom'
import { getUser, resetUserSession } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
    const user = getUser();
    const name = user !== 'undefined' && user ? user.name : '';

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const navigate = useNavigate();

    const logoutHandler = () => {
        resetUserSession();
        navigate('/login');
        window.location.reload();
    };

    return(
    <nav>
        <div className='logo'>
        <Link to='/'>
            <img src="/Logo.png" className="logo-image" />
        </Link>
        <Link to='/' className='logo-text'>EcoSort</Link>
        </div>
        <ul className='nav-with-user'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/premium-content'>Articles</NavLink>
            </li>
            <li>
                <NavLink to='/predict'>Predict</NavLink>
            </li>
            <li>
                <div className='user-dropdown' onClick={handleDropdownToggle}>
                    <img src="/UserCircle.png" className="user-image" alt="User" />
                    {isDropdownVisible && (
                    <div className='dropdown-content'>
                        <p className='username'>{name}</p>
                        <Link to='/settings'>
                        <button type="button" onClick={logoutHandler} className='logout-btn'>
                            Logout
                        </button>
                        </Link>
              </div>
            )}
          </div>
            </li>
        </ul>
    </nav>
    )
};