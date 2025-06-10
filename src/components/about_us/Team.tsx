import React from 'react';
import './Team.css';
import { useLocale } from '../../context/LocaleContext';

interface Member {
    name: string;
    assistant: string;
    position: string;
    social: {
        instagram: string;
        facebook: string;
        twitter: string;
        linkedin: string;
    };
}

const Team: React.FC = () => {
    const { t } = useLocale();
    const members: Member[] = [
        {
            name: t('team.members.0.name'),
            assistant: t('team.members.0.assistant'),
            position: t('team.members.0.position'),
            social: {instagram: '#', facebook: '#', twitter: '#', linkedin: '#'}
        },
        {
            name: t('team.members.1.name'),
            assistant: t('team.members.1.assistant'),
            position: t('team.members.1.position'),
            social: {instagram: '#', facebook: '#', twitter: '#', linkedin: '#'}
        },
        {
            name: t('team.members.2.name'),
            assistant: t('team.members.2.assistant'),
            position: t('team.members.2.position'),
            social: {instagram: '#', facebook: '#', twitter: '#', linkedin: '#'}
        },
        {
            name: t('team.members.3.name'),
            assistant: t('team.members.3.assistant'),
            position: t('team.members.3.position'),
            social: {instagram: '#', facebook: '#', twitter: '#', linkedin: '#'}
        }
    ];
    return (
        <div className="team-box">
            <h2 className="text-4xl font-medium py-2">{t('team.title')}</h2>
            <div className="team-container">
                <section className="team-section">
                    <div className="team-grid">
                        {members.map((m, i) => (
                            <div className="team-card" key={i}>
                                <div className="avatar">
                                    <img src={process.env.PUBLIC_URL + "/assets/face" + (i + 1) + ".png"} alt={t('team.avatarAlt')} className="image" />
                                </div>
                                <h3>{m.name}</h3>
                                <p className="assistant">{t('team.assistant')}: {m.assistant}</p>
                                <p className="position">{t('team.position')}: {m.position}</p>
                                <div className="social-icons">
                                    <a href={m.social.instagram} aria-label="Instagram">📸</a>
                                    <a href={m.social.facebook} aria-label="Facebook">📘</a>
                                    <a href={m.social.twitter} aria-label="Twitter">🐦</a>
                                    <a href={m.social.linkedin} aria-label="LinkedIn">💼</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="image-section">
                    <img src={process.env.PUBLIC_URL + "/assets/lom.png"} alt={t('team.imageAlt')} className="image" />
                </section>
            </div>
        </div>
    );
};

export default Team;
