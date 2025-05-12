import React, {useState, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import './AutoSlider.css';

interface Slide {
    title: string;
    text: string;
}

const slides: Slide[] = [
    {title: 'Quality Service', text: 'We use only high-quality parts…'},
    {title: 'Fast Turnaround', text: 'Our average repair time is under 24 hours.'},
    {title: 'Expert Technicians', text: 'All our mechanics are factory-trained…'},
];

const variants = {
    enter: (direction: number) => ({
        y: direction > 0 ? 100 : -100,
        opacity: 0,
    }),
    center: {
        y: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        y: direction > 0 ? -100 : 100,
        opacity: 0,
    }),
};

const AutoSlider: React.FC = () => {
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
    const slideCount = slides.length;

    // Auto-sliding
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(([i]) => [(i + 1) % slideCount, 1]);
        }, 5000);
        return () => clearTimeout(timer);
    }, [index]);

    const paginate = (newDirection: number) => {
        setIndex(([i]) => [
            (i + newDirection + slideCount) % slideCount,
            newDirection,
        ]);
    };

    return (
        <div className="auto-slider">
            <div className="slides-container">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{type: 'linear', duration: 0.7}}
                        className="slide"
                    >
                        <h3>{slides[index].title}</h3>
                        <p>{slides[index].text}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="arrows">
                <button className="arrow up" onClick={() => paginate(-1)}>↑</button>
                <button className="arrow down" onClick={() => paginate(1)}>↓</button>
            </div>
        </div>
    );
};

export default AutoSlider;
