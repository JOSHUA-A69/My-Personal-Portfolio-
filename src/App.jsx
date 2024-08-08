import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css'
import './components/header.css';
import './components/home.css';
import './components/about.css';
import './components/services.css';
import './components/portfolio.css';
import './components/footer.css';
import './components/contact.css';
import './components/navabar.css';


const App = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
