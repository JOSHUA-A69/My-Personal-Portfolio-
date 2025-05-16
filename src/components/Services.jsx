import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [activeTab, setActiveTab] = useState('Frontend');

    const categories = {
        Frontend: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
            { src: "https://raw.githubusercontent.com/CSS-Next/logo.css/main/css.svg", alt: "CSS" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", alt: "jQuery" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "Redux" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap" }
        ],
        Backend: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
            { src: require('../img/logo-laravel-icon-1024.png'), alt: "Laravel" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C Language" }
        ],
        Databases: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg", alt: "MariaDB" }
        ],
        "Development Tools": [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "Visual Studio Code" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", alt: "Command Line" },
            { src: require('../img/XAMPP_logo.png'), alt: "XAMPP" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", alt: "npm" },
            { src: "https://getcomposer.org/img/logo-composer-transparent.png", alt: "Composer" },
            { src: require('../img/Cursor.jpg'), alt: "Cursor AI" }
        ],
        Deployment: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", alt: "Netlify" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", alt: "Vercel" }
        ]
    };

    return (
        <section className="services" id="services">
            <h2 className="heading">My <span>Services</span></h2>
            <div className="services-container">
                {/* Web Development Service */}
                <div className="services-box">
                    <i className="fas fa-code"></i>
                    <h3>Full Stack Development</h3>
                    <p>
                        With experience in creating programs. 
                        Strong collaboration skills and a proven history with full stack development. 
                        I'm both capable of Back end and Front end.
                    </p>
                </div>

                {/* Data Analytics Service */}
                <div className="services-box">
                    <i className="fa-solid fa-database"></i>
                    <h3>Data Analytics</h3>
                    <p>
                        With experience in data analysis and proficiency in tools that support insightful reporting, 
                        I excel at generating valuable insights to inform business decisions.
                    </p>
                </div>
            </div>

            {/* Tech Stacks Section */}
            <div className="techstacks">
                <h2 className="heading">My <span>Tech Stacks</span></h2>
                <div className="tech-container">
                    <div className="tech-tabs">
                        {Object.keys(categories).map((category) => (
                            <button
                                key={category}
                                className={`tech-tab ${activeTab === category ? 'active' : ''}`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="tech-content">
                        <div className="techstacks-icons">
                            {categories[activeTab].map((tech, index) => (
                                <img
                                    key={index}
                                    src={tech.src}
                                    alt={tech.alt}
                                    title={tech.alt}                                    width="60"
                                    height="60"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
