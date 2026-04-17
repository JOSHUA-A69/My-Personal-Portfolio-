import React, { useState } from 'react';
import './services.css';
import cssLogo from '../img/css-logo.svg';

const Services = () => {
    const [activeTab] = useState('Stack');

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
                        With hands-on experience in developing functional programs and systems.
                        Strong collaboration skills with a proven background in full-stack
                        development. Capable of handling both front-end and back-end tasks, with a
                        stronger focus on logic building, problem-solving, system functionality,
                        and efficient application performance.
                    </p>
                </div>

                {/* Database Management Service */}
                <div className="services-box">
                    <i className="fa-solid fa-database"></i>
                    <h3>Database Management</h3>
                    <p>
                        With hands-on experience in database management, I design and maintain
                        efficient, reliable, and secure databases that support business operations,
                        optimize data flow, and ensure system accuracy and performance.
                    </p>
                </div>

                {/* DevOps Service */}
                <div className="services-box">
                    <i className="fa-solid fa-gears"></i>
                    <h3>DevOps & Deployment</h3>
                    <p>
                        With hands-on experience in DevOps and deployment workflows using
                        Git/GitHub, Docker, and modern hosting platforms. Focused on reliable
                        releases, efficient version control, smooth deployment processes, and
                        seamless transitions from development to production environments.
                    </p>
                </div>

                {/* IT Specialist Service */}
                <div className="services-box">
                    <i className="fa-solid fa-server"></i>
                    <h3>IT Specialist</h3>
                    <p>
                        With hands-on experience in IT support, system administration, and
                        networking. Skilled in configuring and maintaining Windows and Linux
                        environments, troubleshooting hardware, software, and connectivity issues,
                        and ensuring stable, secure, and efficient day-to-day operations.
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
