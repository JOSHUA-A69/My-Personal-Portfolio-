import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        const onScroll = () => {
            sections.forEach((sec) => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        document
                            .querySelector(`header nav a[href*="${id}"]`)
                            .classList.add('active');
                    });
                }
            });

            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header>
            <div id="menu-icon" onClick={handleMenuClick} className={isActive ? 'bx-x' : ''}>
                <i className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`}></i>
            </div>
            <nav className={isActive ? 'active navbar' : 'navbar'}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;
