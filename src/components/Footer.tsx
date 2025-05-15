import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p className={'font-light'}>Kontaktuj nás: info@mycompany.com</p>
                <p className={'font-light'}>© 2025 Flexibility Services</p>
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