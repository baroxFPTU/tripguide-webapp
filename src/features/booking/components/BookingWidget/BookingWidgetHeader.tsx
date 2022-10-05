import React from 'react';

import BookingWidgetDropdownList from './BookingWidgetDropdownList';
import BookingWidgetTabList from './BookingWidgetTabList';
import * as Styled from './styles';

const BookingWidgetHeader = () => {
  return (
    <Styled.BookingWidgetHeader>
      <BookingWidgetTabList />
      <BookingWidgetDropdownList />
    </Styled.BookingWidgetHeader>
  );
};

export default BookingWidgetHeader;
