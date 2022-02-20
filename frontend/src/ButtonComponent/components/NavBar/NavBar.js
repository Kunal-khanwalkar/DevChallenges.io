import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='sidebar'>
            <h2><a href="#"><span>Dev</span>challenges.io</a></h2>
            <ul>
                <li>Colors</li>
                <li>Typography</li>
                <li>Spaces</li>
                <li className='current-item'><a href="#">Buttons</a></li>
                <li>Inputs</li>
                <li>Grid</li>
            </ul>
        </nav>
    );
}

export default NavBar;