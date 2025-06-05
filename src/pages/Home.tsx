import React from 'react';
import {motion} from 'framer-motion';
import Partners from '../components/about_us/Partners';
import {useServices} from "../context/ServiceContext";
import Accordion from "../components/main/Accordion";

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
    const services = useServices();
    return (
        <div className="home-page">
            <Accordion items={services}/>
            <motion.div {...animationVariants.fadeUp} className="py-4">
                <Partners/>
            </motion.div>
        </div>
    );
};

export default HomePage;