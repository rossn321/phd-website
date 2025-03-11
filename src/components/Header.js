import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <Link to='/' className="logo">Bhargavi Ganesh</Link>

            <button className="menu-button" onClick={toggleMenu}>
                {menuOpen ? '✕' : '☰'}
            </button>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
                    <li><NavLink to="/publications" onClick={() => setMenuOpen(false)}>Publications</NavLink></li>
                    <li><NavLink to="/talks" onClick={() => setMenuOpen(false)}>Talks</NavLink></li>
                    <li><NavLink to="/awards" onClick={() => setMenuOpen(false)}>Awards</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;