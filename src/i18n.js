import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true,
    // lng: 'en', // Langue par défaut
    fallbackLng: 'en',
    resources: {
      en: {
        translation: require('../src/translations/translate-en.json')
      },
      fr: {
        translation: require('../src/translations/translate-fr.json')
      },
      ja: {
        translation: require('../src/translations/translate-ja.json')
      },
      zh: {
        translation: require('../src/translations/translate-zh.json')
      }
    },
  });

export default i18n;