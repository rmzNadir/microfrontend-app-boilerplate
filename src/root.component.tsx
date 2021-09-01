import styled from 'styled-components';
import { Card, Typography, Select, ConfigProvider } from 'antd';
import { useTranslation, I18nextProvider } from 'react-i18next';
import LanguageProvider, { useLanguageCTX } from './Utils/LanguageCTX';
import { Language } from './Types';

const { Title: AntTitle } = Typography;

const MainSpace = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #654ea3 0%, #eaafc8 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(AntTitle)`
  margin: 0 !important;
`;

const Image = styled.img`
  width: 60rem;
`;

const LanguageSelect = styled(Select)`
  width: auto;
  position: absolute;
  top: 3rem;
  right: 3rem;
`;

export interface IMain {
  name: string;
}

// eslint-disable-next-line react/display-name
const Main: React.FC<IMain> = ({ name }) => {
  const { locale, changeLng } = useLanguageCTX();
  const { t, i18n } = useTranslation();

  return (
    <ConfigProvider locale={locale}>
      <MainSpace>
        <Info>
          <Card>
            <Image src={require('./Assets/images/success.jpg')} alt='' />
            <Title>{t('mount_message', { name })}</Title>
          </Card>
        </Info>
        <LanguageSelect
          onSelect={(v) => changeLng(v as Language)}
          defaultValue={i18n.language}
        >
          <Select.Option value='es-MX'>Español</Select.Option>
          <Select.Option value='en-US'>English</Select.Option>
        </LanguageSelect>
      </MainSpace>
    </ConfigProvider>
  );
};

export interface IRoot {
  name: string;
  i18n: any; // Fix this
}
const Root: React.FC<IRoot> = (props) => {
  const { i18n, name } = props;

  const appNamespace = name.split('/')[1];

  return (
    <I18nextProvider i18n={i18n} defaultNS={appNamespace}>
      <LanguageProvider name={name}>
        <Main name={name} />
      </LanguageProvider>
    </I18nextProvider>
  );
};

export default Root;
