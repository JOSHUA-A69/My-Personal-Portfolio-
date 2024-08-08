import React from 'react';
import './about.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="https://i.postimg.cc/HW7r5fg5/435397787-434941355886389-7641357581127868885-n.jpg" alt="Personal-Pic"/>
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>JOSHUA RUSSEL UY</h3>
                <p>Hailing from the picturesque province of Bohol, Philippines...</p>
                <p>My goal is to establish a fulfilling career as a software engineer...</p>
            </div>
        </section>
    );
}

export default About;
