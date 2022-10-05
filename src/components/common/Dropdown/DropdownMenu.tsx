import React from 'react';
import styled from 'styled-components';

interface IDropdownMenuProps {
  children?: React.ReactNode;
}

const DropdownMenuWrapper = styled.div.attrs({
  className: 'dropdown_menu',
})`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  z-index: 99;

  display: none;
  width: 250px;
  max-height: 450px;
  padding: 12px;

  border-radius: 12px;
  border: 1px solid #d3d4d9;
  box-shadow: 8px 28px 50px -13px rgba(0, 0, 0, 0.1);
  background: #fff;

  overflow-y: auto;
`;

export const DropdownMenu = ({ children }: IDropdownMenuProps) => {
  return <DropdownMenuWrapper>{children}</DropdownMenuWrapper>;
};
