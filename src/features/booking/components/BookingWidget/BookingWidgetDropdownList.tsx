import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import * as Styled from './styles';

const BookingWidgetDropdownList = () => {
  return (
    <Styled.BookingWidgetDropdownList>
      <Styled.CustomizeDropdown dropdownIcon={<MdKeyboardArrowDown />}>
        Roundtrip
      </Styled.CustomizeDropdown>
      <Styled.CustomizeDropdown dropdownIcon={<MdKeyboardArrowDown />}>
        1 passenger
      </Styled.CustomizeDropdown>
    </Styled.BookingWidgetDropdownList>
  );
};

export default BookingWidgetDropdownList;
