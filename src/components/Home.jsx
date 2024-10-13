import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import './home.css';



const Home = () => {
    useEffect(() => {
        // ScrollReveal animations
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

        // Typed.js initialization
        const typed = new Typed('.multiple-text', {
            strings: [' a Web Developer','specializing in Front End development'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        // Cleanup Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Joshua</h1>
                <h3>And I'm  <span className="multiple-text"></span></h3>
                <div className="social-media">
                    <a href="https://github.com/JOSHUA-A69"><i className='fab fa-github'></i></a>
                    <a href="https://www.linkedin.com/in/joshua-russel-uy-a9b024243/"><i className='fab fa-linkedin'></i></a>
                </div>
                <a href="../Resume/Joshua_Russel_Uy_Resume.pdf" className="btn">Check Resume</a>
            </div>
            <div className="home-img">
                <img src="" alt="" />
            </div>
        </section>
    );
};

export default Home;