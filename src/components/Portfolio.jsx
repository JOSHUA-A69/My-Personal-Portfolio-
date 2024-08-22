import React from 'react';
import './portfolio.css';


const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>
            <div className="portfolio-container">
            <div className="portfolio-box">
                    <img src="https://i.postimg.cc/DzqZyfC5/github-logo.png" alt="github"/>
                    <div className="portfolio-layer">
                        <h4>My GitHub Repositories</h4>
                        <p>Feel free to explore my GitHub repositories where you can find most of my showcase projects.</p>
                        <a href="https://github.com/JOSHUA-A69?tab=repositories"><i className='fas fa-link'></i></a>
                    </div>
                </div>
            </div>

                {/* 
                <div className="portfolio-box">
                    <img src="https://i.postimg.cc/rFZZbns8/Header.png" alt="RyoukouTravel"/>
                    <div className="portfolio-layer">
                        <h4>RyoukouTravel</h4>
                        <p>a Travel blog website for Bohol Philippines, appreciating on Bohol's most overlooked tourist attractions.</p>
                        <a href="https://joshua-a69.github.io/RyoukouTravel-website-School-Project/LogInPage.html"><i className='fas fa-link'></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src="https://i.postimg.cc/y6j9Bj5t/SScamera-Shop.png" alt="School-Project-eCom-Website"/>
                    <div className="portfolio-layer">
                        <h4>e-Commerce Website</h4>
                        <p>Front-end e-Commerce Website</p>
                        <a href="https://joshua-a69.github.io/School-Project-eCom-Website/index.html"><i className='fas fa-link'></i></a>
                    </div>
                </div>
                */}
                
                
        </section>
    );
}

export default Portfolio;
