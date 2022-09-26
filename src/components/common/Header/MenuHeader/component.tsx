import React from 'react';
import { BiBell } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';

import AmeriaFlag from 'assets/flags/america-flag.png';
import Button from '../../Button';
import Avatar from '../../Avatar/component';
import * as Styled from './styles';

const MenuHeader = () => {
  return (
    <Styled.MenuHeaderWrapper>
      <Styled.CountryButton>
        <span className='country_name caption-medium'>usd</span>
        <div className='country_flag-icon'>
          <img src={AmeriaFlag} alt='' />
        </div>
      </Styled.CountryButton>
      <Styled.DropdownButton noPadding>
        <BiBell className='noti-icon' />
        <Styled.DropdownMenuWrapper className='dropdown_menu'>
          Dropdown Menu
        </Styled.DropdownMenuWrapper>
      </Styled.DropdownButton>
      <Styled.VerticalSeperator />
      <Styled.DropdownButton
        rightIcon={<MdArrowDropDown className='btn_dropdown-icon' />}
        noPadding
      >
        <Avatar />
        <span className='btn_dropdown_name'>Delowar</span>
        <Styled.DropdownMenuWrapper className='dropdown_menu'>
          Dropdown Menu
        </Styled.DropdownMenuWrapper>
      </Styled.DropdownButton>
    </Styled.MenuHeaderWrapper>
  );
};

export default MenuHeader;
