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
                        I'm both capable of Back-End and Front-End especially in the Front-End side of things.
                    </p>
                    <div className="logos">
                        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                        <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                        <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery" />
                        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
                        <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
                        <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL" />
                        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                        <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
                        <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
                    </div>
                </div>
                <div className="services-box">
                    <i className="fa-solid fa-database"></i>
                    <h3>Data Analyst</h3>
                    <p>With expertise in SQL and data interpretation, I excel at generating insightful reports and informing business decisions.</p>
                    <div className="logos">
                        <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL" />
                    </div>
                </div>
                <div className="services-box">
                    <i className='fas fa-pencil-ruler'></i>
                    <h3>UI/UX</h3>
                    <p>UI/UX Designer with a great passion for good designs. The main goal is to always create modern, attractive, and user-friendly interfaces and find creative and simple solutions for your business.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;