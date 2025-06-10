import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // ← добавили Link
import './Header.css';
import { useLocale } from '../context/LocaleContext';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const { lang, setLang, t } = useLocale();
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
                <div className="company-name">{t('companyName')}</div>
            </Link>

            <nav ref={navRef} className={`nav ${isOpen ? 'open' : ''}`}>
                {[
                    { to: '/', label: t('menu.home') },
                    { to: '/services', label: t('menu.services') },
                    { to: '/about-us', label: t('menu.about') },
                    { to: '/contact-us', label: t('menu.contact') },
                    { to: '/terms', label: t('menu.terms') },
                    { to: '/jobs', label: t('menu.jobs') },
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

            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginLeft: 16 }}>
                <button onClick={() => setLang('cs')} className={`lang-flag-btn${lang === 'cs' ? ' active-lang' : ''}`} aria-label="Čeština">
                    <img src={process.env.PUBLIC_URL + '/img/flags/cz.svg'} alt="Čeština" style={{ width: 28, height: 20, display: 'block' }} />
                </button>
                <button onClick={() => setLang('en')} className={`lang-flag-btn${lang === 'en' ? ' active-lang' : ''}`} aria-label="English">
                    <img src={process.env.PUBLIC_URL + '/img/flags/gb.svg'} alt="English" style={{ width: 28, height: 20, display: 'block' }} />
                </button>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="hamburger" />
            </button>
        </header>
    );
};

export default Header;
