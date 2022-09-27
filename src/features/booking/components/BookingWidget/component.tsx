import React from 'react';
import styled from 'styled-components';

const StyledBookingWidget = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 24px 64px;
  margin-bottom: -230px;
  border-radius: 24px;
  box-shadow: 7px 28px 50px -13px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const BookingWidget = () => {
  return <StyledBookingWidget>test</StyledBookingWidget>;
};

export default BookingWidget;
