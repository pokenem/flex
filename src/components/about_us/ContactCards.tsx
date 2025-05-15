import React from 'react';
import './ContactCards.css';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactCards: React.FC = () => {
    const info = [
        {
            icon: <MapPin />,
            title: 'Address',
            details: (
                <>
                    1652 Cordia Cir<br />
                    Newton, North Carolina(NC), 28658
                </>
            ),
        },
        {
            icon: <Mail />,
            title: 'Email',
            details: <a href="mailto:hello@mui.dev">hello@mui.dev</a>,
        },
        {
            icon: <Phone/>,
            title: 'Phone',
            details: <a href="tel:+13182859856">(318) 285-9856</a>,
        },
    ];

    return (
        <section className="contact-cards">
            {info.map(({ icon, title, details }, index) => (
                <div key={index} className="contact-card">
                    <div className="icon">{icon}</div>
                    <h3 className="title">{title}</h3>
                    <p className="details">{details}</p>
                </div>
            ))}
        </section>
    );
};

export default ContactCards;
