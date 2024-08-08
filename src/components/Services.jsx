import React from 'react';
import './services.css';

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="heading">My <span>Services</span></h2>
            <div className="services-container">
                <div className="services-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Web Development</h3>
                    <p>With experience in creating custom websites...</p>
                </div>
                <div className="services-box">
                    <i className="fa-solid fa-database"></i>
                    <h3>Data Analyst</h3>
                    <p>With expertise in SQL and data interpretation...</p>
                </div>
                <div className="services-box">
                    <i className='fas fa-pencil-ruler'></i>
                    <h3>UI/UX</h3>
                    <p>UI/UX Designer with a great passion for good designs...</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
