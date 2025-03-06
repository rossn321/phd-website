import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className='logo'>Bhargavi Ganesh</div>
            <nav className='nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href='#publications'>Publications</a></li>
                    <li><a href='#talks'>Talks</a></li>
                    <li><a href='#awards'>Awards</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;