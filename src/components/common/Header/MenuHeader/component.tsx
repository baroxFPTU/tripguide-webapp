import React from 'react';
import { BiBell } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';

import AmeriaFlag from 'assets/flags/america-flag.png';
import Avatar from '../../Avatar/component';
import * as Styled from './styles';
import Dropdown, { DropdownItem } from 'components/common/Dropdown';

const MenuHeader = () => {
  return (
    <Styled.MenuHeaderWrapper>
      <Styled.CountryButton>
        <span className='country_name caption-medium'>usd</span>
        <div className='country_flag-icon'>
          <img src={AmeriaFlag} alt='' />
        </div>
      </Styled.CountryButton>
      <Dropdown>
        <BiBell className='noti-icon' />
        <DropdownItem.Menu>Test</DropdownItem.Menu>
      </Dropdown>
      <Styled.VerticalSeperator />
      <Dropdown dropdownIcon={<MdArrowDropDown className='btn_dropdown-icon' />}>
        <Avatar />
        <DropdownItem.Label className='btn_dropdown_name'>Test</DropdownItem.Label>
        <DropdownItem.Menu>Test</DropdownItem.Menu>
      </Dropdown>
    </Styled.MenuHeaderWrapper>
  );
};

export default MenuHeader;
