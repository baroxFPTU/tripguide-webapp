import styled from 'styled-components';

import Dropdown from 'components/common/Dropdown';

export const BookingWidget = styled.div`
  display: flex;
  width: 100%;
  padding: 34px 64px;
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
  column-gap: 28px;
  margin-bottom: -2px;
`;

export const TabListButton = styled.button.attrs({ className: 'TabListButton' })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 28px;

  color: #8e94a4;
  font-size: 16px;
  font-weight: 700;

  &[data-selected='true'] {
    border-bottom: 2px solid #326bff;
    color: #141416;
  }

  & .TabIcon {
    margin-right: 8px;
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

export const BookingWidgetPanel = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 28px;
`;
