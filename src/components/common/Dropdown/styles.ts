import styled from 'styled-components';
import Button from '../Button';
import { IDropdown } from './component';

export const Dropdown = styled.button<IDropdown>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  min-width: 40px;

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

export const DropdownLabel = styled.label.attrs({ className: 'DropdownLabel' })`
  display: block;
  text-align: left;
  font-weight: 700;
  font-size: 20px;
  color: #434345;
`;

export const DropdownPlaceholder = styled.p`
  color: #a5a9b5;
  margin-top: 4px;
  display: block;
  text-align: left;
  font-size: 168x;
`;
