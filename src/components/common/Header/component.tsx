import React from 'react';

import * as Styled from './styles';
import MenuHeader from './MenuHeader';
import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <Styled.HeaderWrapper>
        <Logo />
        <MenuHeader />
      </Styled.HeaderWrapper>
    </header>
  );
};

export default Header;
