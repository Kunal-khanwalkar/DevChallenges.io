import React from 'react';
import './NavBar.css';

const NavBar = ({ Page }) => {

    let Buttons = Page==='Buttons' ? 'current-item' : '';
    let Inputs = Page==='Inputs' ? 'current-item' : '';

    return (
        <nav className='sidebar'>
            <h2><a href="#"><span>Dev</span>challenges.io</a></h2>
            <ul>
                <li>Colors</li>
                <li>Typography</li>
                <li>Spaces</li>
                <li><a href="https://62125171606d73f0b56e829c--kunal-khanwalkar-makes-great-sites.netlify.app/" className={Buttons}>Buttons</a></li>
                <li><a href='https://622ddc6881749978d28f357c--the-great-kunal-khanwalkar-site.netlify.app/' className={Inputs}>Inputs</a></li>
                <li>Grid</li>
            </ul>
        </nav>
    );
}

export default NavBar;
