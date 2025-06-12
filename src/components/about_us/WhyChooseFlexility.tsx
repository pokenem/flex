import React from 'react';
import './WhyChooseFlexility.css';
import { Settings, CheckCircle, RefreshCw, PenTool } from 'lucide-react';
import { useLocale } from '../../context/LocaleContext';

interface Feature {
    title: string;
    description: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const WhyChooseFlexility: React.FC = () => {
    const { t } = useLocale();
    const items = [
        { title: t('why.items.0.title'), desc: t('why.items.0.desc'), Icon: Settings },
        { title: t('why.items.1.title'), desc: t('why.items.1.desc'), Icon: CheckCircle },
        { title: t('why.items.2.title'), desc: t('why.items.2.desc'), Icon: RefreshCw },
        { title: t('why.items.3.title'), desc: t('why.items.3.desc'), Icon: PenTool },
    ];
    return (
        <section className="why-choose">
            <h2 className="why-choose__title text-4xl font-medium">{t('why.title')}</h2>
            <div className="why-choose__grid">
                {items.map(({ title, desc, Icon }, i) => (
                    <div className="why-choose__card" key={i}>
                        <Icon className="why-choose__icon" />
                        <h3 className="why-choose__card-title font-medium text-xl">{title}</h3>
                        <p className="why-choose__card-desc font-regular text-base">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseFlexility;