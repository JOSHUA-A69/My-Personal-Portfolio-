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
                    <p> with experience in creating custom websites.
                    Strong collaboration skills and a proven history with web development.
                        
                    </p>
                    <p>
                    I specialize in frontend technologies, including HTML, CSS, JavaScript, React, and Bootstrap, and I use libraries such as Redux and jQuery. 
                    For backend development, I work with Node.js, PHP, and SQL. Additionally, I am proficient in tools like Git and GitHub and have a familiarity with the C programming language.
                    </p>
                </div>
                <div className="services-box">
                    <i className="fa-solid fa-database"></i>
                    <h3>Data Analyst</h3>
                    <p>With expertise in SQL and data interpretation, I excel at generating insightful reports and informing business decisions.</p>
                </div>
                <div className="services-box">
                    <i className='fas fa-pencil-ruler'></i>
                    <h3>UI/UX</h3>
                    <p>UI/UX Designer with a great passion for good designs. The main goal is to always create modern, attractive and user-friendly interfaces and find creative and simple solutions for your business.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;
