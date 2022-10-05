import styled from 'styled-components';
import { device } from 'styles/main';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 36px;

  max-width: 1720px;
  margin: 0 auto;
  background: #fff;
  @media ${device.tablet} {
    padding: 18px 24px;
  }
`;

export { HeaderWrapper };
