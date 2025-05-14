import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const toggleMenu = () => setIsOpen(prev => !prev);

    // Закрываем меню при клике вне его области
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Если меню открыто и клик был НЕ внутри navRef
            if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="header">
            <div className="logo-section">
                <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" className="logo" />
                <div className="company-name">Flexibility Services</div>
            </div>

            {/* Привязываем ref к nav */}
            <nav ref={navRef} className={`nav ${isOpen ? 'open' : ''}`}>
                {[
                    { to: '/', label: "Home" },
                    { to: '/services', label: "Services" },
                    { to: '/about-us', label: "About Us" },
                    { to: '/contact-us', label: "Contact Us" },
                    { to: '/terms', label: "T&C" },
                ].map(({ to, label }) => (
                    <NavLink
                        onClick={() => setIsOpen(false)}
                        key={to}
                        to={to}
                        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                        end
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>

            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="hamburger" />
            </button>
        </header>
    );
};

export default Header;
