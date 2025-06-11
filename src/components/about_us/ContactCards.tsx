import React from 'react';
import './ContactCards.css';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLocale } from '../../context/LocaleContext';

const ContactCards: React.FC = () => {
    const { t } = useLocale();
    const info = [
        {
            icon: <MapPin />,
            title: t('contacts.cards.0.title'),
            details: (
                <>
                    V dolině 1515/1b, Michle (Praha 10), 101 00 Praha
                </>
            ),
        },
        {
            icon: <Mail />,
            title: t('contacts.cards.1.title'),
            details: <a href="mailto:info@flexilityservices.cz">info@flexilityservices.cz</a>,
        },
        {
            icon: <Phone/>,
            title: t('contacts.cards.2.title'),
            details: <>
                <a href="tel:+420774079615">Marek Řehák, (+420) 774 079 615</a><br/>
                <a href="tel:+420734173237">Tomáš Latislav,  (+420) 734 173 237</a>
            </>,
        },
    ];

    return (
        <section className="contact-cards-section">
            <section className="contact-cards">
                {info.map(({ icon, title, details }, index) => (
                    <div key={index} className="contact-card">
                        <div className="icon">{icon}</div>
                        <h3 className="title">{title}</h3>
                        <p className="details">{details}</p>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default ContactCards;
