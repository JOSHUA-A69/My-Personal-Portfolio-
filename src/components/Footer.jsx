import React from 'react';
import './footer.css';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2026 by Joshua Russel Uy | All Rights Reserved.</p>
                <p>Powered by <i className="fab fa-react" style={{ fontSize: '30px' }}></i></p>
            </div>
            {/* Removed up-arrow button as requested */}
        </footer>
    );
}

export default Footer;
