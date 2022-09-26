import Button from 'components/common/Button';
import styled from 'styled-components';

import { device } from 'styles/main';

export const MenuHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  .noti-icon {
    font-size: 1.5rem;
  }

  .btn_dropdown-icon {
    font-size: 1.5rem;
  }

  @media ${device.mobileL} {
    column-gap: 8px;
    .btn_dropdown-icon,
    .btn_dropdown_name {
      display: none;
    }

    .noti-icon {
      font-size: 1.3rem;
    }
  }
`;

export const CountryButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 14px;
  .country_name {
    text-transform: uppercase;
    font-weight: 700;
  }

  .country_flag-icon {
    width: 22px;
    height: 22px;
  }

  @media ${device.mobileL} {
    .country_name {
      font-size: 12px;
    }

    .country_flag-icon {
      width: 18px;
      height: 18px;
    }
  }
`;

export const VerticalSeperator = styled.div`
  width: 1px;
  height: 25px;
  margin: 0 5px;
  background: #dbdbdb;
  display: block;
`;

export const DropdownButton = styled(Button)`
  position: relative;

  padding: 6px 12px;
  border: 1px solid transparent;
  border-radius: 12px;
  &:focus {
    background: #e9eaee;
    & .dropdown_menu {
      display: block;
    }
  }

  &:hover {
    border: 1px solid #d3d4d9;
  }
`;

export const DropdownMenuWrapper = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 12px);
  right: 0;

  width: 250px;
  max-height: 450px;
  padding: 12px;

  border-radius: 12px;
  box-shadow: -1px 9px 14px 0px #e9eaee;
  background: #fff;

  overflow-y: auto;
`;
