import React from 'react';
import './WhyChooseFlexility.css';
import { Settings, CheckCircle, RefreshCw, PenTool } from 'lucide-react';

interface Feature {
    title: string;
    description: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
    {
        title: 'Riešenia na mieru',
        description: 'Flexibilita prispôsobiť naše služby špecifickým potrebám a rozsahu vášho projektu.',
        Icon: Settings,
    },
    {
        title: 'Excelencia v kontrole kvality',
        description: 'Komplexné vstupné, priebežné a výstupné kontroly s presnou dokumentáciou.',
        Icon: CheckCircle,
    },
    {
        title: 'Rýchle prepracovanie',
        description: 'Rýchle zásahy na mieste alebo v interných priestoroch na opravu chýb a udržanie výroby.',
        Icon: RefreshCw,
    },
    {
        title: 'Inžiniering a podpora',
        description: 'Odborná technická pomoc pri PPAP, FMEA, podpore výrobných liniek a tvorbe dokumentácie.',
        Icon: PenTool,
    },
];

const WhyChooseFlexility: React.FC = () => (
    <section className="why-choose">
        <h2 className="why-choose__title text-4xl font-medium">Prečo si vybrať Flexility</h2>
        <div className="why-choose__grid">
            {features.map(({ title, description, Icon }) => (
                <div key={title} className="why-choose__card">
                    <Icon className="why-choose__icon" />
                    <h3 className="why-choose__card-title font-regular text-xl">{title}</h3>
                    <p className="why-choose__card-desc font-thin text-base">{description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default WhyChooseFlexility;