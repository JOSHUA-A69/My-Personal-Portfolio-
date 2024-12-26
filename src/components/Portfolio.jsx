import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return (
       
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                <img src={require('../img/Calorie Counter .png')} alt="pic" />
                    <div className="portfolio-layer">
                        <h4>Calorie Counter</h4>
                        <p>This Calorie Counter project is a simple web app designed to help users manage their daily calorie intake and expenditure.</p>
                        <a href="https://joshua-a69.github.io/Calorie-Counter/CalorieCounter.html"><i className='fas fa-link'></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                <img src={require('../img/Rock, Paper, Scissors Game.png')} alt="pic" />
                    <div className="portfolio-layer">
                        <h4>Rock, Paper, Scissors Game</h4>
                        <p>The Rock Paper Scissors Game is a simple interactive web app where a user plays against the computer.</p>
                        <a href="https://joshua-a69.github.io/Rock-Paper-Scissors-Game/RockPaperScissors.html"><i className='fas fa-link'></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                <img src={require('../img/Screenshot 2024-04-30 125359.png')} alt="pic" />
                    <div className="portfolio-layer">
                        <h4>RyoukouTravel</h4>
                        <p>A Travel blog website for Bohol Philippines, appreciating on Bohol's most overlooked tourist attractions.</p>
                        <a href="https://joshua-a69.github.io/RyoukouTravel-website-School-Project/LogInPage.html"><i className='fas fa-link'></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                <img src={require('../img/Weather app.png')} alt="pic" />
                    <div className="portfolio-layer">
                        <h4>Weather app</h4>
                        <p>The Weather App is a web application designed to provide users with real-time weather information for any location.</p>
                        <a href="https://github.com/JOSHUA-A69/Weather-site"><i className='fas fa-link'></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                <img src={require('../img/Options Page .png')} alt="pic" />
                    <div className="portfolio-layer">
                        <h4>Divine Sushi Shop Ordering System </h4>
                        <p>A web-based CRUD application designed to streamline operations for a sushi shop.</p>
                        <a href="https://github.com/JOSHUA-A69/CRUD-Sushi-Shop-Ordering-System-School-Project"><i className='fas fa-link'></i></a>
                    </div>
                </div>
                <div className="portfolio-box">
                <img src={require('../img/GitHub.png')} alt="github" />
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