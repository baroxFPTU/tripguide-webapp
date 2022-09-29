import React from 'react';
import * as Styled from './styles';

interface IDropdown {
  children: React.ReactNode;
  dropdownIcon?: React.ReactNode;
}

interface IDropdownLabel {
  children: React.ReactNode;
  [key: string]: any;
}

const Dropdown = ({ children, dropdownIcon: DropdownIcon, ...props }: IDropdown) => {
  return (
    <Styled.Dropdown rightIcon={DropdownIcon} noPadding {...props}>
      {children}
    </Styled.Dropdown>
  );
};

export const DropdownLabel = ({ children, ...props }: IDropdownLabel) => {
  return <span {...props}>{children}</span>;
};

export default Dropdown;
