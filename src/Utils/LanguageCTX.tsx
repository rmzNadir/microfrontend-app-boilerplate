import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import esEs from 'antd/lib/locale/es_ES';
import enUS from 'antd/lib/locale/en_US';
import { Locale } from 'antd/lib/locale-provider';
import { LanguageCTXValue, Language } from '../Types';
import { setStorage } from './Storage';

const CTX_DEFAULT_VALUE = {
  locale: esEs,
  changeLng: (_lng: Language) => {
    return;
  },
};

const LanguageCTX = createContext<LanguageCTXValue>(CTX_DEFAULT_VALUE);

export const useLanguageCTX = () => {
  return useContext(LanguageCTX);
};

interface Props {
  name: string;
}

const LanguageProvider: React.FC<Props> = ({ children, name }) => {
  const [locale, setLocale] = useState<Locale>(esEs);
  const { i18n } = useTranslation();

  const appNamespace = name.split('/')[1];

  const loadResource = useCallback(
    (language: Language) => {
      i18n.addResourceBundle(
        language,
        appNamespace,
        require(`../Translations/${language}.json`)
      );
    },
    [i18n, appNamespace]
  );

  const changeLng = useCallback(
    (lng: Language) => {
      loadResource(lng);
      i18n.changeLanguage(lng);
      setStorage('i18next', lng);

      switch (lng) {
        case Language['es-MX']:
          setLocale(esEs);
          break;
        case Language['en-US']:
          setLocale(enUS);
          break;
        default:
          break;
      }
    },
    [i18n, loadResource]
  );

  // Weird workaround to react to language change on another micro front-end
  useEffect(() => {
    changeLng(i18n.language);
  }, [i18n.language, changeLng]);

  const value: LanguageCTXValue = {
    locale,
    changeLng,
  };

  return <LanguageCTX.Provider value={value}>{children}</LanguageCTX.Provider>;
};

export default LanguageProvider;
