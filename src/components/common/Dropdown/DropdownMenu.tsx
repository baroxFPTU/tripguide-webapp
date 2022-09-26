import React from 'react';
import styled from 'styled-components';

interface IDropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenuWrapper = styled.div.attrs({
  className: 'dropdown_menu',
})`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;

  display: none;
  width: 250px;
  max-height: 450px;
  padding: 12px;

  border-radius: 12px;
  box-shadow: -1px 9px 14px 0px #e9eaee;
  background: #fff;

  overflow-y: auto;
`;

export const DropdownMenu = ({ children }: IDropdownMenuProps) => {
  return <DropdownMenuWrapper>{children}</DropdownMenuWrapper>;
};
