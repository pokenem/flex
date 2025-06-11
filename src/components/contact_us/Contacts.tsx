import React from 'react';
import "./Contacts.css"
import { Phone, Clock, MapPin, Mail } from 'lucide-react';
import { useLocale } from '../../context/LocaleContext';

// Zoznam ikon
const socialLinks = [
    { href: 'https://www.instagram.com/flexibilityservices', img: 'inst.svg', alt: 'Instagram' },
    { href: 'https://t.me/flexibilityservices', img: 'telegr.svg', alt: 'Telegram' },
    { href: 'https://wa.me/+66660850722', img: 'whatsapp.svg', alt: 'WhatsApp' },
    { href: 'https://www.facebook.com', img: 'facebook-icon.svg', alt: 'Facebook' },
];

const Contacts: React.FC = () => {
    const { t } = useLocale();
    return (
        <div className="contacts-container">
            <div className="u-text-center font-bold text-4xl pb-2">{t('contacts.title')}</div>
            <div className="contacts-wrapper">
                <div className="contacts-info">
                    <ul className="info-list">
                        <li>
                            <Phone className="info-icon" />
                            <div className={"text-xl font-regular"}><a href="tel:+420774079615">Marek Řehák, (+420) 774079615</a></div>
                        </li>
                        <li>
                            <Mail className="info-icon" />
                            <div className={"text-xl font-regular"}><a href="mailto:marek.rehak@flexilityservices.cz">marek.rehak@flexilityservices.cz</a></div>
                        </li>
                        <li>
                            <Phone className="info-icon" />
                            <div className={"text-xl font-regular"}><a href="tel:+420734173237">Tomáš Latislav, (+420) 734 173 237</a></div>
                        </li>
                        <li>
                            <Mail className="info-icon" />
                            <div className={"text-xl font-regular"}><a href="mailto:tomas.latislav@flexilityservices.cz">tomas.latislav@flexilityservices.cz</a></div>
                        </li>
                        <li>
                            <Mail className="info-icon" />
                            <div className={"text-xl font-regular"}><a href="mailto:info@flexilityservices.cz">info@flexilityservices.cz</a></div>
                        </li>
                        <li>
                            <MapPin className="info-icon" />
                            <div className={"text-xl font-regular"}>V dolině 1515/1b, Michle (Praha 10), 101 00 Praha</div>
                        </li>
                    </ul>
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
                <div className="contacts-map">
                    <iframe
                        src="https://www.google.com/maps?q=V+dolin%C4%9B+1515%2F1b%2C+Michle+%28Praha+10%29%2C+101+00+Praha&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
