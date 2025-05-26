
import ServiceCard from './ServiceCard';
import './ServicesPage.css';
import {useServices} from "../../context/ServiceContext";

const ServicesPage: React.FC = () => {
    const services = useServices();

    return (
        <div className="services-page">
            <div className="u-text-center font-bold text-4xl py-4">Naše služby</div>
            <div className="services-list">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} index={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
