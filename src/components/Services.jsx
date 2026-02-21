import React, { useState } from 'react';
import './services.css';
import cssLogo from '../img/css-logo.svg';

const Services = () => {
    const [activeTab, setActiveTab] = useState('Stack');

    const categories = {
        Stack: [
            { icon: 'devicon-html5-plain colored', alt: 'HTML' },
            { image: cssLogo, alt: 'CSS' },
            { icon: 'devicon-javascript-plain colored', alt: 'JavaScript' },
            { icon: 'devicon-react-original colored', alt: 'React' },
            { icon: 'devicon-bootstrap-plain colored', alt: 'Bootstrap' },
            { icon: 'devicon-tailwindcss-original colored', alt: 'Tailwind CSS' },
            { icon: 'devicon-nodejs-plain colored', alt: 'Node.js' },
            { icon: 'devicon-php-plain colored', alt: 'PHP' },
            { icon: 'devicon-laravel-plain colored', alt: 'Laravel' },
            { icon: 'devicon-python-plain colored', alt: 'Python' },
            { icon: 'devicon-c-plain colored', alt: 'C' },
            { icon: 'devicon-mysql-plain colored', alt: 'MySQL' },
            { icon: 'devicon-git-plain colored', alt: 'Git' },
            { icon: 'devicon-github-original colored', alt: 'GitHub' },
            { icon: 'devicon-vscode-plain colored', alt: 'VS Code' },
            { icon: 'devicon-npm-original-wordmark colored', alt: 'npm' },
            { icon: 'devicon-docker-plain colored', alt: 'Docker' },
            { icon: 'devicon-vercel-original colored', alt: 'Vercel' },
            { image: 'https://cdn.simpleicons.org/render/46E3B7', alt: 'Render' }
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

                {/* DevOps Service */}
                <div className="services-box">
                    <i className="fa-solid fa-gears"></i>
                    <h3>DevOps & Deployment</h3>
                    <p>
                        CI/CD and containerized workflows using Git/GitHub, Docker, and modern hosting like Vercel. 
                        Focused on reliable releases, observability, and smooth handoffs from development to production.
                    </p>
                </div>

                {/* System Management Service */}
                <div className="services-box">
                    <i className="fa-solid fa-server"></i>
                    <h3>System Management</h3>
                    <p>
                        Practical administration across Windows and Linux: environment setup, configuration, and maintenance. 
                        Emphasis on security, backups, and performance tuning for stable operations.
                    </p>
                </div>
            </div>

            {/* Tech Stacks Section */}
            <div className="techstacks">
                <h2 className="heading"><span>Tech Stacks</span></h2>
                <div className="tech-container">
                    {/* Tabs hidden since only one category */}
                    <div className="tech-content">
                        <div className="techstacks-icons">
                            {categories[activeTab].map((tech, index) => (
                                <span className={`tech-icon ${tech.alt.toLowerCase()} ${tech.customClass || ''}`} key={index} title={tech.alt} aria-label={tech.alt}>
                                    {tech.image ? <img src={tech.image} alt={tech.alt} loading="lazy" /> : <i className={tech.icon}></i>}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
