import React, { useState, useEffect } from 'react';
import './header.css';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    };

    // Restore sticky header behavior like before
    useEffect(() => {
        const onScroll = () => {
            const header = document.querySelector('.header');
            if (header) {
                header.classList.toggle('sticky', window.scrollY > 100);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Active class handled by NavLink

    return (
        <header className="header">
            <a href="/" className="logo">Personal Portfolio</a>
            <div id="menu-icon" onClick={handleMenuClick}>
                <i className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`}></i>
            </div>
            <nav className={isActive ? 'active navbar' : 'navbar'}>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>ABOUT</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>SERVICES</NavLink>
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>PORTFOLIO</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>CONTACT</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
