import React from 'react';
import styled from 'styled-components';
import { BiBell } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';

import AmeriaFlag from 'assets/flags/america-flag.png';
import Button from '../Button';
import Avatar from '../Avatar/component';
import { device } from 'styles/main';

const MenuHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  .noti-icon {
    font-size: 1.5rem;
  }

  .btn_dropdown-icon {
    font-size: 1.5rem;
  }

  @media ${device.mobileL} {
    column-gap: 8px;
    .btn_dropdown-icon,
    .btn_dropdown_name {
      display: none;
    }

    .noti-icon {
      font-size: 1.3rem;
    }
  }
`;

const CountryButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 14px;
  .country_name {
    text-transform: uppercase;
    font-weight: 700;
  }

  .country_flag-icon {
    width: 22px;
    height: 22px;
  }

  @media ${device.mobileL} {
    .country_name {
      font-size: 12px;
    }

    .country_flag-icon {
      width: 18px;
      height: 18px;
    }
  }
`;

const VerticalSeperator = styled.div`
  width: 1px;
  height: 25px;
  margin: 0 5px;
  background: #dbdbdb;
  display: block;
`;

const MenuHeader = () => {
  return (
    <MenuHeaderWrapper>
      <CountryButton>
        <span className='country_name caption-medium'>usd</span>
        <div className='country_flag-icon'>
          <img src={AmeriaFlag} alt='' />
        </div>
      </CountryButton>
      <Button noPadding>
        <BiBell className='noti-icon' />
      </Button>
      <VerticalSeperator />
      <Button rightIcon={<MdArrowDropDown className='btn_dropdown-icon' />} noPadding>
        <Avatar />
        <span className='btn_dropdown_name'>Delowar</span>
      </Button>
    </MenuHeaderWrapper>
  );
};

export default MenuHeader;
