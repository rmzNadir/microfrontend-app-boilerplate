import { Locale } from 'antd/lib/locale-provider';

export interface LanguageCTXValue {
  locale: Locale;
  changeLng(lng: Language): void;
}

export enum Language {
  'en-US' = 'en-US',
  'es-MX' = 'es-MX',
}
