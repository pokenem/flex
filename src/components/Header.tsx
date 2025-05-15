import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // ← добавили Link
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const toggleMenu = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
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
            <Link to={"/"} className={"logo-section"}>
                <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" className="logo" />
                <div className="company-name">Flexibility Services</div>
            </Link>

            <nav ref={navRef} className={`nav ${isOpen ? 'open' : ''}`}>
                {[
                    { to: '/', label: "Domov" },
                    { to: '/services', label: "Služby" },
                    { to: '/about-us', label: "O nás" },
                    { to: '/contact-us', label: "Kontakt" },
                    { to: '/terms', label: "Obchodné podmienky" },
                ].map(({ to, label }) => (
                    <NavLink
                        onClick={() => setIsOpen(false)}
                        key={to}
                        to={to}
                        className={({ isActive }) => `nav-link${isActive ? ' active' : ''} font-medium`}
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
