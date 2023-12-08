import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'

export const NavbarNotLogin = () => {
    return(
    <nav>
        <div className='logo'>
        <Link to='/'>
            <img src="/Logo.png" className="logo-image" />
        </Link>
        <Link to='/' className='logo-text'>EcoSort</Link>
        </div>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/login' className='loginBtn' activeclassName='active'>Login</NavLink>
            </li>
            <li>
                <NavLink to='/signup' className='signupBtn' activeclassName='active'>Sing up</NavLink>
            </li>
        </ul>
    </nav>
    )
};

export default NavbarNotLogin;