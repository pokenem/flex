import React from 'react';
import { motion } from 'framer-motion';
import './OnasSection.css';

const OnasSection: React.FC = () => (
    <section className="onas-section glass-container">
        <motion.div className="onas-image-wrapper" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:1}}>
            <img src={process.env.PUBLIC_URL + '/assets/about1.jpg'} alt="Flexility" className="onas-image" />
        </motion.div>
        <div className="onas-content">
            <motion.h2 className="onas-title text-4xl font-medium" initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:1}}>Flexility Services</motion.h2>
            <motion.p className="onas-subtitle text-xl font-light" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.2}}>
                Spolehlivý partner pro výrobní a logistické procesy v automotive.
            </motion.p>
            <motion.p className="onas-text text-base font-light" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.3}}>
                Poskytujeme komplexní služby s důrazem na kvalitu, preciznost a rychlost dodání. Naše flexibilita a zkušenosti pomáhají udržet plynulost výroby a zvyšovat úroveň kvality u předních světových výrobců i dodavatelů.
            </motion.p>
        </div>
    </section>
);

export default OnasSection; 