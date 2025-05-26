import React from 'react';
import './Footer.css';

const socialLinks = [
    { href: 'https://www.instagram.com/flexibilityservices', img: 'inst.svg', alt: 'Instagram' },
    { href: 'https://t.me/flexibilityservices', img: 'telegr.svg', alt: 'Telegram' },
    { href: 'https://wa.me/+66660850722', img: 'whatsapp.svg', alt: 'WhatsApp' },
    { href: 'https://www.facebook.com', img: 'facebook-icon.svg', alt: 'Facebook' },
];

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p className={'font-light'}>Kontaktuj nás: info@mycompany.com</p>
                <p className={'font-light'}>© 2025 Flexibility Services</p>
            </div>
            <div className="footer-right">
                <ul className="social-list">
                    {socialLinks.map(({ href, img, alt }, i) => (
                        <li key={i}>
                            <a href={href} target="_blank" rel="noreferrer" aria-label={alt}>
                                <img src={process.env.PUBLIC_URL + `/img/svg/${img}`} alt={alt} className="social-icon" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;