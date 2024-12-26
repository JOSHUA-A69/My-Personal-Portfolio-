import React from 'react';
import './about.css';


const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
            <img src={require('../img/About ME pic.png')} alt="Personal-Pic" />
            </div>
            
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>JOSHUA RUSSEL UY</h3>
                <p>
                My goal is to establish a fulfilling career as a web developer, specializing in front-end development or back-end development. I aspire to contribute my technical skills and creativity to the ever-evolving tech industry, pursuing opportunities that allow me to innovate,solve complex problems, and make a meaningful impact. I'm always eager to learn and ready to collaborate, I am dedicated to continuous growth and improvement in my work. I believe that staying curious and open to new ideas is key to innovation, and I strive to apply this mindset in every project I undertake. Whether working independently or as part of a team,
                I am committed to delivering high-quality results and contributing positively to any environment I am a part of.
                </p>
            </div>
        </section>
    );
}
    
export default About; 
