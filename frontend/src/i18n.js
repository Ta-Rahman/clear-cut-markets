import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import de from './locales/de.json';

const i18n = createI18n({
  legacy: false, // You must set legacy to false to use the Composition API
  locale: 'en', // Set the default locale
  fallbackLocale: 'en', // Fallback to English if a translation is missing
  messages: {
    en,
    de
  }
});

export default i18n;