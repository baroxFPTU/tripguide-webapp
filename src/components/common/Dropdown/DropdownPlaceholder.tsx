import React from 'react';
import * as Styled from './styles';
import { IAcceptAnyProps } from 'types/common';

interface IDropdownPlaceholderProps extends IAcceptAnyProps {
  children?: React.ReactNode;
}

export const DropdownPlaceholder = ({ children, ...props }: IDropdownPlaceholderProps) => {
  return <Styled.DropdownPlaceholder {...props}>{children}</Styled.DropdownPlaceholder>;
};
