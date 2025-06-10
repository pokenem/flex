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
                    1652 Cordia Cir<br />
                    Newton, Severná Karolína (NC), 28658
                </>
            ),
        },
        {
            icon: <Mail />,
            title: t('contacts.cards.1.title'),
            details: <a href="mailto:hello@mui.dev">hello@mui.dev</a>,
        },
        {
            icon: <Phone/>,
            title: t('contacts.cards.2.title'),
            details: <a href="tel:+13182859856">(318) 285-9856</a>,
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
