import React from 'react';
import './services.css';

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="heading">My <span>Services</span></h2>
            <div className="services-container">
                <div className="services-box">
                    <i className='fas fa-code'></i>
                    <h3>Web Development</h3>
                    <p>With experience in creating custom websites.
                        Strong collaboration skills and a proven history with web development.
                        I'm both capable of Back end and Front end.
                    </p>
                </div>
                <div className="services-box">
                    <i className="fa-solid fa-database"></i>
                    <h3>Data Analytics</h3>
                    <p>With experience in data analysis and proficiency in tools that support insightful reporting, 
                    I excel at generating valuable insights to inform business decisions.</p>
            </div>
            </div>
        </section>
    );
}

export default Services;