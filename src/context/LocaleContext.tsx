import React, { createContext, useContext, useState, ReactNode } from 'react';
import cs from '../locales/cs/translation.json';
import en from '../locales/en/translation.json';

const translations: Record<string, any> = { cs, en };

interface LocaleContextProps {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextProps>({
  lang: 'cs',
  setLang: () => {},
  t: (key: string) => key,
});

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState('cs');

  function t(key: string): string {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    return typeof value === 'string' ? value : key;
  }

  return (
    <LocaleContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext); 