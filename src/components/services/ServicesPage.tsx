import ServiceCard from './ServiceCard';
import './ServicesPage.css';
import {useServices} from "../../context/ServiceContext";
import { useLocale } from '../../context/LocaleContext';

const ServicesPage: React.FC = () => {
    const services = useServices();
    const { t } = useLocale();

    return (
        <section className="services-section">
            <h1 className="vyhody-title text-4xl font-medium">{t('services.title')}</h1>
            <div className="services-list">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} index={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default ServicesPage;
