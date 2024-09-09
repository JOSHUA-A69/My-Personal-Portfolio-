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
                        I'm both capable of Back end and Front end especially in the Front-End side of things.
                    </p>
                </div>
                <div className="services-box">
                    <i className="fa-solid fa-database"></i>
                    <h3>Data Analyst</h3>
                    <p>With expertise in data interpretation, I excel at generating insightful reports and informing business decisions.</p>
            </div>
            </div>
        </section>
    );
}

export default Services;