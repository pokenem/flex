import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/about_us/Team';
import AutoSlider from '../components/about_us/AutoSlider';
import AboutUsTop from "../components/about_us/AboutUsTop";

const AboutUs: React.FC = () => (
    <div className="about-container">
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <AboutUsTop />
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <Team />
        </motion.div>
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <AutoSlider />
        </motion.div>
    </div>
);

export default AboutUs;
