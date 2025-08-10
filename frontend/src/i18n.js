import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import de from './locales/de.json';

// Function to get the initial locale
const getInitialLocale = () => {
    const savedLocale = localStorage.getItem('user-locale');
    if (savedLocale) {
        return savedLocale;
    }
    const browserLang = navigator.language.split('-')[0];
    return ['en', 'de'].includes(browserLang) ? browserLang : 'en';
};

const i18n = createI18n({
  legacy: false, 
  // FIX: Use our new function to set the starting locale
  locale: getInitialLocale(), 
  fallbackLocale: 'en',
  messages: {
    en,
    de
  }
});

export default i18n;