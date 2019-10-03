import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='link-container'>
                <NavLink className='link first' to='/'>Home</NavLink>
                <NavLink className='link' to='/about'>About</NavLink>
                <NavLink className='link' to='/blogs'>Blogs</NavLink>
                <NavLink className='link' to='/projects'>Projects</NavLink>
                <NavLink className='link' to='/memories'>Memories</NavLink>
                <NavLink className='link' to='/contact'>Contact</NavLink>
            </div>
        </div>
    );
}

export default NavBar;
