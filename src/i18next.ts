import i18next from 'i18next';
import ns1_en from '../public/locales/en/ns1.json';
import ns1_no from '../public/locales/no/ns1.json';
import enFallback from '../public/locales/en/fallback.json';
// import LanguageDetector from 'i18next-browser-languagedetector';

export const defaultNS = 'ns1';
export const fallbackNS = 'fallback';

i18next
    // .use(LanguageDetector)
    .init({
    debug: true,
    fallbackLng: 'en',
    defaultNS,
    fallbackNS,
    resources: {
        en: {
            ns1: ns1_en,
            fallback: enFallback,
        },
        no: {
            ns1: ns1_no,
        },
    }
});

export default i18next;