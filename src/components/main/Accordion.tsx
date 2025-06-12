import React, { useState } from 'react';
import './Accordion.css'; // Для специфичных стилей, см. ниже

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    iconUrl: string;
}

interface AccordionProps {
    items: ServiceItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="accordion-grid">
            {items.map((item) => (
                <div key={item.id} className="accordion-item">
                    <button className="accordion-header p-2" onClick={() => toggle(item.id)}>
                        <div className="accordion-title">
                            <img src={item.iconUrl} alt="icon" className="icon" />
                            <span className="font-medium text-lg pb-2">{item.title}</span>
                        </div>
                        <span className="accordion-symbol font-bold text-xl">
              {openId === item.id ? '−' : '+'}
            </span>
                    </button>
                    <div
                        className={`accordion-content ${openId === item.id ? 'open' : ''}`}
                    >
                        <div
                            className="text-xl font-regular"
                            dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
