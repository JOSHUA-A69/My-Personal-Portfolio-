import React from 'react';
import './about.css';


const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="https://i.postimg.cc/HW7r5fg5/435397787-434941355886389-7641357581127868885-n.jpg" alt="Personal-Pic" />
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>JOSHUA RUSSEL UY</h3>
                <p>
                    Hailing from the picturesque province of Bohol, Philippines, I take pride in my cooperative spirit, resilience, and unwavering determination. 
                    I am adept at adapting to diverse situations and maintaining composure under pressure. 
                    My approach to challenges involves innovative problem-solving and continuous self-improvement. 
                    I am committed to cultivating meaningful relationships, demonstrating empathy, and embracing a calm and thoughtful demeanor. 
                    I set daily goals and value authenticity and genuineness in all interactions.
                </p>
                <p>
                    My goal is to establish a fulfilling career as a software engineer and web developer, specializing in front-end development. 
                    I aspire to contribute my technical skills and creativity to the ever-evolving tech industry, pursuing opportunities that allow me to innovate, 
                    solve complex problems, and make a meaningful impact.
                </p>
            </div>
        </section>
    );
}
    
export default About; 
