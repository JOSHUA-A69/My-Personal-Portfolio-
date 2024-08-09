import React from 'react';
import './header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Header = () => {
    return (
        <header className="header">
            <a href="#" className="logo">Personal Portfolio</a>
            <i className='bx bx-menu' id="menu-icon"></i>
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">ABOUT</a>
                <a href="#services">SERVICES</a>
                <a href="#portfolio">PORTFOLIO</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
    );
}

export default Header;
