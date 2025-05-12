import React from 'react';
import './AboutUsTop.css';

const AboutUsTop: React.FC = () => {
    return (
        <section className="about-us-top">
            <div className="image-stack-container">
                <img
                    src={process.env.PUBLIC_URL + '/assets/icons/img.png'}
                    alt="Background"
                    className="image back"
                />
                <img
                    src={process.env.PUBLIC_URL + '/assets/icons/img.png'}
                    alt="Foreground"
                    className="image front"
                />
            </div>
            <div className="text-container">
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
                    odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                </p>
            </div>
        </section>
    );
};

export default AboutUsTop;