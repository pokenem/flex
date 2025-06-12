import React from 'react';
import './AboutUsTop.css';
import {useLocale} from "../../context/LocaleContext";

const AboutUsTop: React.FC = () => {
    const { t } = useLocale();
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
                <h2 className="text-4xl font-medium">{t("about.title")}</h2>
                <p className="text-xl font-regular">
                    {t("about.details")}
                </p>
            </div>
        </section>
    );
};

export default AboutUsTop;
