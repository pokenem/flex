import React from 'react';
import { motion } from 'framer-motion';
import { Settings, CheckCircle, RefreshCw, PenTool } from 'lucide-react';
import './VyhodySection.css';
import { useLocale } from '../../context/LocaleContext';

const VyhodySection: React.FC = () => {
    const { t } = useLocale();
    const vyhody = [
        {
            title: t('vyhody.0.title'),
            description: t('vyhody.0.description'),
            Icon: Settings,
        },
        {
            title: t('vyhody.1.title'),
            description: t('vyhody.1.description'),
            Icon: CheckCircle,
        },
        {
            title: t('vyhody.2.title'),
            description: t('vyhody.2.description'),
            Icon: RefreshCw,
        },
        {
            title: t('vyhody.3.title'),
            description: t('vyhody.3.description'),
            Icon: PenTool,
        },
    ];
    return (
        <section className="vyhody-section">
            <h2 className="vyhody-title text-4xl font-medium">{t('vyhody.title')}</h2>
            <div className="vyhody-grid">
                {vyhody.map(({ title, description, Icon }, i) => (
                    <motion.div
                        className="vyhody-card"
                        key={title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: i * 0.15 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Icon className="vyhody-icon" size={40} />
                        <h3 className="vyhody-card-title text-xl font-medium">{title}</h3>
                        <p className="vyhody-card-desc text-base font-regular">{description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default VyhodySection; 