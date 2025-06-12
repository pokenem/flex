import React from 'react';
import { useLocale } from '../context/LocaleContext';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: 'certificates.sert1',
    preview: process.env.PUBLIC_URL + '/assets/certificates/sert1.jpg',
    file: process.env.PUBLIC_URL + '/assets/certificates/sert1.pdf',
  },
  // Добавьте новые сертификаты по аналогии
];

const Certificates: React.FC = () => {
  const { t } = useLocale();
  return (
    <div className="app-layout">
      <main className="app-main certificates-page">
        <h1 className="certificates-title text-4xl font-medium u-text-center u-mb-1">{t('certificates.title')}</h1>
        <div className="certificates-grid">
          {certificates.map(cert => (
            <div className="certificate-card" key={cert.id}>
              <a href={cert.file} target="_blank" rel="noopener noreferrer">
                <img src={cert.preview} alt={t(cert.title)} className="certificate-preview" />
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Certificates; 