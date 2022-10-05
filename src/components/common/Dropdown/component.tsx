import React from 'react';
import { DropdownLabel } from './DropdownLabel';
import { DropdownPlaceholder } from './DropdownPlaceholder';
import * as Styled from './styles';

export interface IDropdown {
  label?: string;
  placeholder?: string;
  noPadding?: boolean;
  dropdownIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown = ({
  label,
  placeholder,
  dropdownIcon: DropdownIcon,
  children,
  ...props
}: IDropdown) => {
  return (
    <Styled.Dropdown noPadding {...props}>
      {(label || placeholder) && (
        <div className='DropdownShowing'>
          {label && <DropdownLabel>{label}</DropdownLabel>}
          {placeholder && <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>}
        </div>
      )}
      {children}
      {DropdownIcon && DropdownIcon}
    </Styled.Dropdown>
  );
};

export default Dropdown;
