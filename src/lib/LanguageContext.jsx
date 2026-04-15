import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ru');
  const toggle = () => setLang(l => l === 'ru' ? 'en' : 'ru');
  return (
    <LanguageContext.Provider value={{ lang, toggle, t: (ru, en) => lang === 'ru' ? ru : en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}