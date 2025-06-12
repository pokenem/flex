import React from 'react';
import { motion } from 'framer-motion';
import './OnasSection.css';
import { useLocale } from '../../context/LocaleContext';

const OnasSection: React.FC = () => {
    const { t } = useLocale();
    return (
        <section className="onas-section glass-container">
            <motion.div className="onas-image-wrapper" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:1}}>
                <img src={process.env.PUBLIC_URL + '/assets/about1.jpg'} alt="Flexility" className="onas-image" />
            </motion.div>
            <div className="onas-content">
                <motion.h2 className="onas-title text-4xl font-medium" initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:1}}>{t('companyName')}</motion.h2>
                <motion.p className="onas-subtitle text-xl font-regular" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.2}}>
                    {t('onas.subtitle')}
                </motion.p>
                <motion.p className="onas-text text-base font-regular" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.3}}>
                    {t('onas.text')}
                </motion.p>
            </div>
        </section>
    );
};

export default OnasSection; 