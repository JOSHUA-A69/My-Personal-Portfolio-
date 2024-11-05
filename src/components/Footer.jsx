import React from 'react';
import './footer.css';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2024 by Joshua Russel Uy | All Rights Reserved.</p>
                <p>Powered by <i className="fab fa-react" style={{ fontSize: '30px' }}></i></p>
            </div>
            <div className="footer-iconTop">
                <a href="#home"><i className='fas fa-arrow-up'></i></a>
            </div>
        </footer>
    );
}

export default Footer;
