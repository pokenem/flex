import React from 'react';
import {motion} from 'framer-motion';
import Partners from '../components/about_us/Partners';
import {useServices} from "../context/ServiceContext";
import Accordion from "../components/main/Accordion";
import OnasSection from '../components/main/OnasSection';
import VyhodySection from '../components/main/VyhodySection';
import ZkusenostiSection from '../components/main/ZkusenostiSection';
import Contacts from '../components/contact_us/Contacts';
import {useLocale} from "../context/LocaleContext";

const animationVariants = {
    fadeUp: {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1, transition: {duration: 1, ease: 'easeOut'}},
    },
    zoomIn: {
        initial: {scale: 0.8, opacity: 0},
        animate: {scale: 1, opacity: 1, transition: {duration: 1.2, ease: 'easeOut'}},
    },
    rotateIn: {
        initial: {rotateY: 90, opacity: 0},
        animate: {rotateY: 0, opacity: 1, transition: {duration: 1, ease: 'easeOut'}},
    },
};

const HomePage: React.FC = () => {
    const { t } = useLocale();
    const services = useServices();
    return (
        <div className="home-page">
            <motion.div initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}>
                <OnasSection />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.2}}>
                <VyhodySection />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.3}} transition={{duration: 1, delay: 0.8}}>
                <div className="glass-container py-4">
                    <Partners/>
                </div>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.4}}>
                <ZkusenostiSection />
            </motion.div>
            <motion.div initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.3}} transition={{duration: 1, delay: 0.6}}>
                <div className="glass-container u-mb-2">
                    <div className="u-text-center font-bold text-4xl py-4">{t('services.title')}</div>
                    <Accordion items={services}/>
                </div>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.3}} transition={{duration: 1, delay: 1}}>
                <div className="glass-container py-4">
                    <Contacts/>
                </div>
            </motion.div>
        </div>
    );
};

export default HomePage;