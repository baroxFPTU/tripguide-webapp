import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';
import { device } from 'styles/main';

const Styled = {
  Logo: styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;

    .logo-icon {
      flex-shrink: 0;
      color: #326bff;
      font-size: 2rem;
    }

    @media ${device.mobileL} {
      h4 {
        font-size: 18px;
      }

      .logo-icon {
        font-size: 1.6rem;
      }
    }

    @media ${device.mobileM} {
      h4 {
        font-size: 16px;
      }
      .logo-icon {
        font-size: 1.2rem;
      }
    }
  `,
};
const Logo = () => {
  return (
    <Styled.Logo>
      <FaPaperPlane className='logo-icon' />
      <h4>Tripguide</h4>
    </Styled.Logo>
  );
};

export default Logo;
