import styled from 'styled-components';

import Dropdown from 'components/common/Dropdown';

export const BookingWidget = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 28px 64px;
  margin-bottom: -230px;
  border-radius: 24px;
  box-shadow: 7px 28px 50px -13px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export const BookingWidgetHeader = styled.header.attrs({ className: 'BookingWidgetHeader' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #e9eaee;
`;

export const BookingWidgetTabList = styled.div.attrs({ className: 'BookingWidgetTabList' })`
  display: flex;
  align-items: center;
  column-gap: 24px;
  margin-bottom: -4px;
`;

export const TabListButton = styled.button.attrs({ className: 'TabListButton' })`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 12px 24px 12px; */
  padding-bottom: 24px;

  color: #8e94a4;
  font-size: 14px;
  font-weight: 700;

  &[data-selected='true'] {
    border-bottom: 2px solid #326bff;
    color: #141416;
  }

  & .TabIcon {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

export const BookingWidgetDropdownList = styled.div.attrs({
  className: 'BookingWidgetDropdownList',
})`
  display: flex;
  align-items: center;
`;

export const CustomizeDropdown = styled(Dropdown).attrs({ className: 'DropdownItem' })`
  padding-bottom: 12px;
  padding-top: 12px;
  margin-top: -12px;
  margin-bottom: 12px;
  font-weight: 700;
  color: #434345;
`;
