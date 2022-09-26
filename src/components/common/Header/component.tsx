import * as Styled from './styles';
import MenuHeader from './MenuHeader/component';
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
