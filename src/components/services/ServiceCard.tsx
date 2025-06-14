// src/components/ServiceCard.tsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ServiceItem } from "../../context/ServiceContext";
import "./ServiceCard.css"
import { useLocale } from '../../context/LocaleContext';

interface ServiceCardProps extends ServiceItem {
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, imageUrl, index }) => {
    const navigate = useNavigate();
    const isEven = index % 2 === 0;
    const { t } = useLocale();

    return (
        <motion.div
            className="service-card"
            initial={{ x: isEven ? 200 : -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="service-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="service-details">
                <div className={"text-3xl font-medium"}>{title}</div>
                <div
                    className="text-xl font-regular"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
                <button onClick={() => navigate('/contact-us')} className="contact-button">
                    {t('services.button')}
                </button>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
