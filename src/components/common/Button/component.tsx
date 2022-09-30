import React from 'react';
import styled from 'styled-components';
import { device } from 'styles/main';

interface IButtonProps {
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  noPadding?: boolean;
  [key: string]: any;
}

const handleButtonPaddingSize = (size: string | undefined) => {
  switch (size) {
    case 'sm': {
      return '10px 18px';
    }
    case 'md': {
      return '14px 20px';
    }
    case 'lg': {
      return '18px 24px';
    }
    default: {
      return '';
    }
  }
};

const handleButtonColorByVariant = (variant: string | undefined) => {
  switch (variant) {
    case 'solid': {
      return '#326bff';
    }
    case 'outline': {
      return '#fff';
    }
    default: {
      return 'transparent';
    }
  }
};

const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 12px;
  flex-shrink: 1;

  padding: ${(props) => (props.noPadding ? '0px' : handleButtonPaddingSize(props.size))};
  background-color: ${({ variant }) => handleButtonColorByVariant(variant)};
  min-width: 40px;
  cursor: pointer;

  @media ${device.mobileM} {
    min-width: 26px;
  }
`;

const Button = ({
  children,
  leftIcon,
  rightIcon,
  noPadding,
  variant,
  size,
  ...props
}: IButtonProps) => {
  return (
    <StyledButton noPadding={noPadding || false} size={size} variant={variant} {...props}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
};

export default Button;
