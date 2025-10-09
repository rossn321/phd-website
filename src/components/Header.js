import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import ThemeToggle from './ThemeToggle';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <Link to='/' className="logo">
                    <div className="logo-icon">BG</div>
                    <span>Bhargavi Ganesh</span>
                </Link>

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

                <div className="header-actions">
                    <ThemeToggle />
                    <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;