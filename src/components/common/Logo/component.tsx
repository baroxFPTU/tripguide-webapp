import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';

const Styled = {
  Logo: styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;

    .logo-icon {
      color: #326bff;
      font-size: 2rem;
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
