import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/about_us/Team';
import AutoSlider from '../components/about_us/AutoSlider';
import AboutUsTop from "../components/about_us/AboutUsTop";
import WhyChooseFlexility from "../components/about_us/WhyChooseFlexility";
import ContactCards from "../components/about_us/ContactCards";
import Partners from "../components/about_us/Partners";

const animationVariants = {
    hiddenLeft: { x: -150, opacity: 0, rotate: -5 },
    hiddenRight: { x: 150, opacity: 0, rotate: 5 },
    hiddenFade: { opacity: 0, scale: 0.95 },
    visible: { x: 0, opacity: 1, rotate: 0, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const AboutUs: React.FC = () => (
    <div className="about-container">
        <motion.div
            initial="hiddenLeft"
            animate="visible"
            variants={animationVariants}
        >
            <AboutUsTop />
        </motion.div>

        <div className={'py-2'}></div>

        <motion.div
            initial="hiddenFade"
            animate="visible"
            variants={animationVariants}
        >
            <Partners />
        </motion.div>

        <div className={'py-2'}></div>

        <motion.div
            initial="hiddenRight"
            animate="visible"
            variants={animationVariants}
        >
            <WhyChooseFlexility />
        </motion.div>

        <motion.div
            initial="hiddenFade"
            animate="visible"
            variants={animationVariants}
        >
            <Team />
        </motion.div>

        <motion.div
            initial="hiddenFade"
            animate="visible"
            variants={animationVariants}
        >
            <ContactCards />
        </motion.div>
    </div>
);

export default AboutUs;