// src/context/ServiceContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    iconUrl: string;
}

const ServiceContext = createContext<ServiceItem[] | null>(null);

export const useServices = () => {
    const context = useContext(ServiceContext);
    if (!context) throw new Error('useServices must be used within ServiceProvider');
    return context;
};

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [services, setServices] = useState<ServiceItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:1337/api/services?populate=*');
                const json = await res.json();

                const parsed = json.data.map((item: any): ServiceItem => ({
                    id: item.id,
                    title: item.Title,
                    description: item.Description.map((block: any) =>
                        block.children?.map((child: any) => child.text).join('')
                    ).join('\n'),
                    imageUrl: item.Image?.[0]?.url ? `http://localhost:1337${item.Image[0].url}` : '',
                    iconUrl: item.Icon?.[0]?.url ? `http://localhost:1337${item.Icon[0].url}` : '',
                }));
                console.log(parsed);

                setServices(parsed);
            } catch (error) {
                console.error('Failed to fetch services:', error);
            }
        };

        fetchData();
    }, []);

    return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
};
