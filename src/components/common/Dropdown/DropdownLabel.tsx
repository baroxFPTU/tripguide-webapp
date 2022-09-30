import React from 'react';
import * as Styled from './styles';

interface IDropdownLabel {
  children: React.ReactNode;
  [key: string]: any;
}

export const DropdownLabel = ({ children, ...props }: IDropdownLabel) => {
  return <Styled.DropdownLabel {...props}>{children}</Styled.DropdownLabel>;
};
