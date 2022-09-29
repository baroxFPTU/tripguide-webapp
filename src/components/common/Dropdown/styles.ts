import styled from 'styled-components';
import Button from '../Button';

export const Dropdown = styled(Button)`
  position: relative;

  padding: 6px 12px;
  border: 1px solid transparent;
  border-radius: 12px;
  &:focus {
    background: #d3d4d9;
    & .dropdown_menu {
      display: block;
    }
  }

  &:hover {
    /* border: 1px solid #d3d4d9; */
    background: #e9eaee;
  }
`;
