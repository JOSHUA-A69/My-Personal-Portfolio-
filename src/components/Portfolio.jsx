import React from 'react';
import './portfolio.css';
import eServicesImg from '../img/eServices.png';
import divineSushiImg from '../img/Options Page .png';
import githubImg from '../img/GitHub.png';

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={eServicesImg} alt="eServices" />
                    <div className="portfolio-layer">
                        <h4>eReligiousServices</h4>
                        <p>eReligiousServices is a strategic innovation for Holy Name University that supports CREaM’s mission by streamlining administrative, liturgical, and organizational processes into a single digital platform, enhancing transparency, collaboration, and community engagement.</p>
                        <a href="https://github.com/JOSHUA-A69/CAPSTONE-PROJECT" target="_blank" rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={divineSushiImg} alt="Divine Sushi" />
                    <div className="portfolio-layer">
                        <h4>Divine Sushi</h4>
                        <p>The Divine Sushi Shop Ordering System is a web-based CRUD application designed to streamline operations for a sushi shop and enhance the user experience for customers. </p>
                        <a href="https://github.com/JOSHUA-A69/CRUD-Sushi-Shop-Ordering-System-School-Project" target="_blank" rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={githubImg} alt="GitHub Profile" />
                    <div className="portfolio-layer">
                        <h4>GitHub</h4>
                        <p>Explore my repositories and my projects.</p>
                        <a href="https://github.com/JOSHUA-A69?tab=repositories" target="_blank" rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;