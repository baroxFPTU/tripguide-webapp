import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import * as Styled from './styles';

interface IDropdown {
  children: React.ReactNode;
  dropdownIcon?: React.ReactNode;
}

interface IDropdownLabel {
  children: React.ReactNode;
  [key: string]: any;
}

const Dropdown = (props: IDropdown) => {
  const { children, dropdownIcon: DropdownIcon } = props;
  return (
    <Styled.Dropdown rightIcon={DropdownIcon} noPadding>
      {children}
    </Styled.Dropdown>
  );
};

export const DropdownLabel = ({ children, ...props }: IDropdownLabel) => {
  return <span {...props}>{children}</span>;
};

export default Dropdown;
