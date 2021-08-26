import styled from 'styled-components';
import { Card, Typography } from 'antd';

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

export interface IRoot {
  name: string;
}
const Root: React.FC<IRoot> = (props) => {
  return (
    <MainSpace>
      <Info>
        <Card>
          <Image src={require('./Assets/images/success.jpg')} alt='' />
          <Title>¡{props.name} está montado!</Title>
        </Card>
      </Info>
    </MainSpace>
  );
};

export default Root;
