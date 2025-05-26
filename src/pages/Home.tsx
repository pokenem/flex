import React from 'react';
import { motion } from 'framer-motion';
import AboutUsTop from '../components/about_us/AboutUsTop';
import AutoSlider from '../components/about_us/AutoSlider';
import WhyChooseFlexility from '../components/about_us/WhyChooseFlexility';
import ContactCards from '../components/about_us/ContactCards';
import Partners from '../components/about_us/Partners';
import Team from '../components/about_us/Team';
import ServicesPage from '../components//services/ServicesPage';

const animationVariants = {
    fadeUp: {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
    },
    zoomIn: {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
    },
    rotateIn: {
        initial: { rotateY: 90, opacity: 0 },
        animate: { rotateY: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
    },
};

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <motion.div {...animationVariants.fadeUp} className="py-4">
                <Partners />
            </motion.div>
        </div>
    );
};

export default HomePage;