import React from 'react';
import './services.css';

const Services = () => {
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
                <div className="techstacks-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt="HTML5" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40" alt="CSS3" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" alt="JavaScript" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" alt="React" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" width="40" height="40" alt="jQuery" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="40" height="40" alt="Redux" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="40" height="40" alt="Bootstrap" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="40" height="40" alt="MySQL" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40" alt="Node.js" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" width="40" height="40" alt="MariaDB" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="40" height="40" alt="PHP" />
                    <img src={require('../img/logo-laravel-icon-1024.png')} width="40" height="40" alt="Laravel" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="40" height="40" alt="C Language" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="40" height="40" alt="Python" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" height="40" alt="GitHub" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="40" height="40" alt="Visual Studio Code" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" height="40" alt="Git" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" width="40" height="40" alt="Command Line (CMD)" />
                    <img src="https://i.postimg.cc/XYQzPYHq/XAMPP-logo.png" width="40" height="40" alt="XAMPP" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="40" height="40" alt="npm" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" width="40" height="40" alt="Netlify" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="40" height="40" alt="Vercel" />
                    <img src="https://getcomposer.org/img/logo-composer-transparent.png" width="40" height="40" alt="Composer" />
                    <img src={require('../img/Cursor.jpg')} width="40" height="40" alt="Cursor AI" />
                </div>
            </div>
        </section>
    );
}

export default Services;
