import React from 'react';
import './Team.css';

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

const members: Member[] = [
    {
        name: 'Jane Smith',
        assistant: 'Jake Wilson',
        position: 'Head of Customer Service',
        social: {instagram: '#', facebook: '#', twitter: '#', linkedin: '#'}
    },
    {
        name: 'David Brown',
        assistant: 'Linda Taylor',
        position: 'Lead Technician',
        social: {instagram: '#', facebook: '#', twitter: '#', linkedin: '#'}
    },
    {
        name: 'Emily Johnson',
        assistant: 'Chris Anderson',
        position: 'Marketing Manager',
        social: {instagram: '#', facebook: '#', twitter: '#', linkedin: '#'}
    },
    {
        name: 'Michael Lee',
        assistant: 'Amy Roberts',
        position: 'Senior Mechanic',
        social: {instagram: '#', facebook: '#', twitter: '#', linkedin: '#'}
    }
];

const Team: React.FC = () => (
    <div className="team-box">
        <h2 className="head">Meet our team</h2>
        <div className="team-container">
            <section className="team-section">
                <div className="team-grid">
                    {members.map((m, i) => (
                        <div className="team-card" key={i}>
                            <div className="avatar">
                                <img src={process.env.PUBLIC_URL +"/assets/face" + (i + 1) + ".png"} alt="Front" className="image" />
                            </div>
                            <h3>{m.name}</h3>
                            <p className="assistant">{m.assistant}</p>
                            <p className="position">{m.position}</p>
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
                <img src={process.env.PUBLIC_URL + "/assets/lom.png"} alt="Front" className="image" />
            </section>
        </div>
    </div>

);

export default Team;