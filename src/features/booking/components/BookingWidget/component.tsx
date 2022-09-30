import React from 'react';
import * as Styled from './styles';
import BookingWidgetHeader from './BookingWidgetHeader';
import BookingDropdown from '../BookingDropdown';
import Button from 'components/common/Button';

const BookingWidget = () => {
  return (
    <Styled.BookingWidget>
      <div style={{ flex: 1 }}>
        <BookingWidgetHeader />
        <Styled.BookingWidgetPanel>
          <BookingDropdown label='Location' placeholder='Where are you from?' />
          <BookingDropdown label='Check in' placeholder='Add date' />
          <BookingDropdown label='Check out' placeholder='Add date' />
        </Styled.BookingWidgetPanel>
      </div>
      <Button size='lg' variant='solid'>
        Test
      </Button>
    </Styled.BookingWidget>
  );
};

export default BookingWidget;
