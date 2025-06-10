import React from 'react';
import { motion } from 'framer-motion';
import { Settings, CheckCircle, RefreshCw, PenTool } from 'lucide-react';
import './VyhodySection.css';

const vyhody = [
    {
        title: 'Řešení na míru',
        description: 'Flexibilně přizpůsobíme naše služby specifickým potřebám a rozsahu vašeho projektu.',
        Icon: Settings,
    },
    {
        title: 'Excelentní kontrola kvality',
        description: 'Komplexní vstupní, průběžné i výstupní kontroly s precizní dokumentací.',
        Icon: CheckCircle,
    },
    {
        title: 'Rychlý rework',
        description: 'Okamžité zásahy na místě nebo v našem zázemí pro opravu chyb a udržení výroby.',
        Icon: RefreshCw,
    },
    {
        title: 'Technická podpora',
        description: 'Odborná pomoc při PPAP, FMEA, podpoře linek a tvorbě dokumentace.',
        Icon: PenTool,
    },
];

const VyhodySection: React.FC = () => (
    <section className="vyhody-section">
        <h2 className="vyhody-title text-4xl font-medium">Výhody Flexility</h2>
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
                    <h3 className="vyhody-card-title text-xl font-regular">{title}</h3>
                    <p className="vyhody-card-desc text-base font-thin">{description}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

export default VyhodySection; 