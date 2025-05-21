import React from 'react';
import "./Contacts.css"
import { Phone, Clock, MapPin, Mail } from 'lucide-react';

// Zoznam ikon
const socialLinks = [
    { href: 'https://www.instagram.com/flexibilityservices', img: 'inst.svg', alt: 'Instagram' },
    { href: 'https://t.me/flexibilityservices', img: 'telegr.svg', alt: 'Telegram' },
    { href: 'https://wa.me/+66660850722', img: 'whatsapp.svg', alt: 'WhatsApp' },
    { href: 'https://www.facebook.com', img: 'facebook-icon.svg', alt: 'Facebook' },
];

const Contacts: React.FC = () => {
    return (
        <div className="contacts-container">
            <h2 className="contacts-title">KONTAKTY</h2>
            <div className="contacts-wrapper">
                <div className="contacts-info">
                    <ul className="info-list">
                        <li>
                            <Phone className="info-icon" />
                            <div className={"text-xl font-regular"}><a href="tel:+66660850722">+66 66-085-0722</a></div>
                        </li>
                        <li>
                            <Clock className="info-icon" />
                            <div className={"text-xl font-regular"}>
                                Pon-Ned: 9.00 - 17.00
                            </div>
                        </li>
                        <li>
                            <MapPin className="info-icon" />
                            <div className={"text-xl font-regular"}>
                                9603 Brewery Court South Ozone Park, NY 11420
                            </div>
                        </li>
                        <li>
                            <Mail className="info-icon" />
                            <div className={"text-xl font-regular"}>
                                <a href="mailto:flexibilityservices@gmail.com">flexibilityservices@gmail.com</a>
                            </div>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.030723519528!2d-73.81437902419935!3d40.678210971393404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261f71a4a2675%3A0x611f65ae04921960!2s9603%20Brewery%20Ct%2C%20South%20Ozone%20Park%2C%20NY%2011420%2C%20USA!5e0!3m2!1sen!2sus!4v1716315201914!5m2!1sen!2sus"
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
