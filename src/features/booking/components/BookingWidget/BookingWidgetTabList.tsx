import React from 'react';
import * as Styled from './styles';
import { RiHotelBedFill } from 'react-icons/ri';
import { MdFlightTakeoff, MdDirectionsCar } from 'react-icons/md';

const BookingWidgetTabList = () => {
  return (
    <Styled.BookingWidgetTabList>
      <Styled.TabListButton data-selected={true}>
        <RiHotelBedFill className='TabIcon' />
        Hotel
      </Styled.TabListButton>
      <Styled.TabListButton data-selected={false}>
        <MdFlightTakeoff className='TabIcon' />
        Flight
      </Styled.TabListButton>
      <Styled.TabListButton data-selected={false}>
        <MdDirectionsCar className='TabIcon' />
        Car Rental
      </Styled.TabListButton>
    </Styled.BookingWidgetTabList>
  );
};

export default BookingWidgetTabList;
