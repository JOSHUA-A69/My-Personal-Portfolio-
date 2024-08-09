import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2024 by Joshua Russel Uy | All Rights Reserved.</p>
            </div>
            <div className="footer-iconTop">
                <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
            </div>
        </footer>
    );
}

export default Footer;
