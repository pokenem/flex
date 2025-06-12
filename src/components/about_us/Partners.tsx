import React from 'react';
import "./Partners.css"
import { useLocale } from '../../context/LocaleContext';

export interface Company {
    id: number;
    name: string;
    logoUrl: string;
}

const companies: Company[] = [
    { id: 1, name: 'ŠKODA AUTO', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/skoda-logo.svg' },
    { id: 2, name: 'Jaguar Land Rover', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/jaguar-landrover-logo.jpg' },
    { id: 3, name: 'BMW', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/BMW-logowebp.webp' },
    { id: 4, name: 'Mercedes-Benz', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/mercedes-benz-logo.png' },
    { id: 5, name: 'Faurecia', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/faurecia-logo.png'},
    { id: 6, name: 'Magna', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/magna-logo.png' },
    { id: 7, name: 'Bosch', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/bosch-logo.webp' },
    { id: 8, name: 'Continental', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/continental-logo.png' },
    { id: 9, name: 'Lear', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/lear-logo.png' },
    { id: 10, name: 'Adient', logoUrl: process.env.PUBLIC_URL + '/assets/partners-logo/adient-logo.webp' },
];

const Partners: React.FC = () => {
    const { t } = useLocale();
    return (
        <div className="app-layout">
            <main className="app-main partners-page">
                <section className="partners-section">
                    <div className="vyhody-title text-4xl font-medium">{t('partners.title')}</div>
                    {/* Логотипы партнеров */}
                    <section className="partners-logos">
                        <div className="logos-grid">
                            {companies.map(c => (
                                <div key={c.id} className="logo-item">
                                    <img src={c.logoUrl} alt={c.name} className="logo-img" />
                                    <span className="logo-name font-regular">{c.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Partners;
