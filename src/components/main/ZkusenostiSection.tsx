import React from 'react';
import { motion } from 'framer-motion';
import './ZkusenostiSection.css';
import { useLocale } from '../../context/LocaleContext';

const ZkusenostiSection: React.FC = () => {
    const { t } = useLocale();
    const zkusenosti = [
        {
            title: t('zkusenosti.0.title'),
            image: process.env.PUBLIC_URL + '/assets/about2.jpg',
            text: t('zkusenosti.0.text'),
        },
        {
            title: t('zkusenosti.1.title'),
            image: process.env.PUBLIC_URL + '/assets/about2.jpg',
            text: t('zkusenosti.1.text'),
        },
    ];
    return (
        <section className="zkusenosti-section">
            <h2 className="zkusenosti-title text-4xl font-medium">{t('zkusenosti.title')}</h2>
            <div className="zkusenosti-grid">
                {zkusenosti.map((z, i) => (
                    <motion.div
                        className="zkusenosti-card"
                        key={z.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <img src={z.image} alt={z.title} className="zkusenosti-img" />
                        <h3 className="zkusenosti-card-title text-xl font-regular">{z.title}</h3>
                        <div className="zkusenosti-card-desc text-base font-regular" dangerouslySetInnerHTML={{__html: z.text}} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ZkusenostiSection; 