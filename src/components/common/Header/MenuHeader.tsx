import React from 'react';
import AmeriaFlag from 'assets/flags/america-flag.png';
import styled from 'styled-components';

const CountryButton = styled.button`
  display: flex;
  align-items: center;

  .country_name {
    text-transform: uppercase;
  }

  .country_flag-icon {
    width: 25px;
    height: 25px;
  }
`;

const MenuHeader = () => {
  return (
    <div>
      <CountryButton>
        <span className='country_name caption-medium'>usd</span>
        <div className='country_flag-icon'>
          <img src={AmeriaFlag} alt='' />
        </div>
      </CountryButton>
    </div>
  );
};

export default MenuHeader;
