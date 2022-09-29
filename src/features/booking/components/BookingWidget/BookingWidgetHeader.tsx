import React from 'react';

import BookingWidgetDropdownList from './BookingWidgetDropdownList';
import BookingWidgetTabList from './BookingWidgetTabList';
import * as Styled from './styled';

const BookingWidgetHeader = () => {
  return (
    <Styled.BookingWidgetHeader>
      <BookingWidgetTabList />
      <BookingWidgetDropdownList />
    </Styled.BookingWidgetHeader>
  );
};

export default BookingWidgetHeader;
