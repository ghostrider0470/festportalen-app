import { defaultNS, fallbackNS } from '../i18n';
import resources from './resources.ts';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        fallbackNS: typeof fallbackNS;
        resources: typeof resources;
    }
}