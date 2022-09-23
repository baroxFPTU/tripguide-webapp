import React from 'react';
import styled from 'styled-components';
import { device } from 'styles/main';

interface IStyledButtonProps {
  noPadding: boolean;
}

interface IButtonProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  noPadding?: boolean;
}

const StyledButton = styled.button<IStyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 12px;
  flex-shrink: 1;

  padding: ${(props) => (props.noPadding ? '0px' : '8px')};
  min-width: 40px;
  cursor: pointer;

  @media ${device.mobileM} {
    min-width: 26px;
  }
`;

const Button = ({ children, leftIcon, rightIcon, noPadding }: IButtonProps) => {
  return (
    <StyledButton noPadding={noPadding || false}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
};

export default Button;
