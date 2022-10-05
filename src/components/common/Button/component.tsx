import React from 'react';
import * as Styled from './styles';

export interface IButtonProps {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  noPadding?: boolean;
  hasIcon?: boolean;
  [key: string]: any;
}

const Button = ({
  children,
  leftIcon,
  rightIcon,
  noPadding,
  variant,
  size,
  hasIcon,
  ...props
}: IButtonProps) => {
  return (
    <Styled.Button
      noPadding={noPadding || false}
      size={size || 'md'}
      variant={variant || 'ghost'}
      hasIcon={Boolean(leftIcon || rightIcon || hasIcon)}
      {...props}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </Styled.Button>
  );
};

export default Button;
