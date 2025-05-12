import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>Contact us at: info@mycompany.com</p>
                <p>© 2025 My Company</p>
            </div>
            <div className="footer-right">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/facebook.svg"} alt="Facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src={process.env.PUBLIC_URL + "/assets/icons/instagram.svg"} alt="Instagram" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;