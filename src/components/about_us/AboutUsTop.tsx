import React from 'react';
import './AboutUsTop.css';

const AboutUsTop: React.FC = () => {
    return (
        <section className="about-us-top">
            <div className="image-stack-container">
                <img
                    src={process.env.PUBLIC_URL + '/assets/about1.jpg'}
                    alt="Pozadie"
                    className="image back"
                />
                <img
                    src={process.env.PUBLIC_URL + '/assets/about2.jpg'}
                    alt="Popredie"
                    className="image front"
                />
            </div>
            <div className="text-container">
                <h2 className="text-4xl font-medium">O nás</h2>
                <p className="text-xl font-light">
                    Spoločnosť Flexility services s.r.o. je spoľahlivým partnerom v oblasti podpory
                    výrobných a logistických procesov predovšetkým v automobilovom priemysle. Poskytujeme
                    komplexné služby s dôrazom na kvalitu, precíznosť a rýchlosť dodania, ktoré
                    sú nevyhnutné v dynamickom a náročnom prostredí automotive výroby.
                </p>
            </div>
        </section>
    );
};

export default AboutUsTop;
