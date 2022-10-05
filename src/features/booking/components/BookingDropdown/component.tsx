import React from 'react';
import * as Styled from './styles';
import { DropdownItem } from 'components/common/Dropdown';

interface IBookingDropdownProps {
  label: string;
  placeholder?: string;
}

const BookingDropdown = ({ label, placeholder }: IBookingDropdownProps) => {
  return (
    <Styled.CustomizeDropdown label={label} placeholder={placeholder}>
      <DropdownItem.Menu></DropdownItem.Menu>
    </Styled.CustomizeDropdown>
  );
};

export default BookingDropdown;
