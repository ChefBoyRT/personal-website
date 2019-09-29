import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    );
}

export default NavBar;
