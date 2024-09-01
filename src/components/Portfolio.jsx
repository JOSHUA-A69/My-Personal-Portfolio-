import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return (
       
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>
            <div className="portfolio-container">
                 {/*
                <div className="portfolio-box">
                    <img src="https://i.postimg.cc/pXWcKbQB/coming-soon.png" alt="coming soon" />
                    <div className="portfolio-layer">
                        <h4>Coming Soon</h4>
                        <p>coming soon</p>
                        <a href=""><i className='fas fa-link'></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src="https://i.postimg.cc/pXWcKbQB/coming-soon.png" alt="coming soon" />
                    <div className="portfolio-layer">
                        <h4>Coming Soon</h4>
                        <p>coming soon</p>
                        <a href=""><i className='fas fa-link'></i></a>
                    </div>
                </div>
                */}
                <div className="portfolio-box">
                    <img src="https://i.postimg.cc/DzqZyfC5/github-logo.png" alt="github" />
                    <div className="portfolio-layer">
                        <h4>My GitHub Repositories</h4>
                        <p>Feel free to explore my GitHub repositories where you can find most of my showcase projects.</p>
                        <a href="https://github.com/JOSHUA-A69?tab=repositories"><i className='fas fa-link'></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Portfolio;
