import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import uzTranslator from './locales/uz.json';
import ruTranslator from './locales/ru.json';
import enTranslator from './locales/en.json';

// Function to get the initial language
const getInitialLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('i18nextLng') || 'uz';
  }
  return 'uz'; // Default language if localStorage is not available
};

// Initialize i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uzTranslator },
      ru: { translation: ruTranslator },
      en: { translation: enTranslator }
    },
    lng: getInitialLanguage(), // Default language
    fallbackLng: 'en', // Default fallback language
  });

export default i18n;
