import styled from 'styled-components';

import Dropdown from 'components/common/Dropdown';
import Button from 'components/common/Button';
import { device } from 'styles/main';

export const BookingWidget = styled.div`
  display: flex;
  width: 100%;
  padding: 34px 64px;
  margin-bottom: -230px;
  border-radius: 24px;
  box-shadow: 7px 28px 50px -13px rgba(0, 0, 0, 0.1);
  background: #fff;

  @media (max-width: 930px) {
    padding: 24px;
    flex-direction: column;
  }
`;

export const BookingWidgetHeader = styled.header.attrs({ className: 'BookingWidgetHeader' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.laptop} {
    border-bottom: 2px solid #e9eaee;
  }

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const BookingWidgetTabList = styled.div.attrs({ className: 'BookingWidgetTabList' })`
  display: flex;
  align-items: center;
  column-gap: 28px;
  margin-bottom: -2px;
  @media (max-width: 930px) {
    width: 100%;
    border-bottom: 2px solid #e9eaee;

    & > button {
      flex: 1;
      margin-bottom: -2px;
    }
  }
`;

export const TabListButton = styled.button.attrs({ className: 'TabListButton' })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 28px;

  color: #8e94a4;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;

  &[data-selected='true'] {
    border-bottom: 2px solid #326bff;
    color: #141416;
  }

  & .TabIcon {
    flex-shrink: 0;
    margin-right: 8px;
    font-size: 1.5rem;
  }

  @media ${device.mobileL} {
    font-size: 14px;
    padding-bottom: 20px;
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
  @media ${device.mobileL} {
    margin-bottom: 0;
  }
`;

export const SearchButton = styled(Button)`
  align-self: end;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const BookingWidgetPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  margin-top: 28px;
  flex-wrap: wrap;
  @media (max-width: 930px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 12px;
    & > button {
      grid-column: 1/3;
    }
    & > button:nth-child(2) {
      grid-column: 1/2;
    }
    & > button:nth-child(3) {
      grid-column: 2/3;
    }
  }
`;

export const BookingWidgetLeft = styled.div`
  flex: 1;
`;
export const BookingWidgetRight = styled.div`
  display: flex;
  margin-left: 46px;
  @media (max-width: 930px) {
    margin-left: 0px;
    margin-top: 18px;
  }
`;
