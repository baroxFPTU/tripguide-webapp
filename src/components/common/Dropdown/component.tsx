import React from 'react';
import { DropdownLabel } from './DropdownLabel';
import { DropdownPlaceholder } from './DropdownPlaceholder';
import * as Styled from './styles';

interface IDropdown {
  label?: string;
  placeholder?: string;
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
    <Styled.Dropdown rightIcon={DropdownIcon} noPadding {...props}>
      {(label || placeholder) && (
        <div className='DropdownShowing'>
          {label && <DropdownLabel>{label}</DropdownLabel>}
          {placeholder && <DropdownPlaceholder>{placeholder}</DropdownPlaceholder>}
        </div>
      )}
      {children}
    </Styled.Dropdown>
  );
};

export default Dropdown;
