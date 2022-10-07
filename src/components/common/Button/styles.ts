import { IButtonProps } from './component';
import styled from 'styled-components';
import { device } from 'styles/main';

const handleButtonPaddingSize = (size: string | undefined) => {
  switch (size) {
    case 'sm': {
      return '10px 18px';
    }
    case 'lg': {
      return '18px 24px';
    }
    default: {
      return '14px 20px';
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

export const Button = styled.button<IButtonProps>`
  display: ${(props) => (props.hasIcon ? 'flex' : 'inline-block')};
  ${(props) =>
    props.hasIcon
      ? `
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  min-width: 40px;
  `
      : `
  min-width: 150px;
  `}
  align-self: baseline;
  flex-shrink: 1;
  padding: ${(props) => (props.noPadding ? '0px' : handleButtonPaddingSize(props.size))};

  background-color: ${({ variant }) => handleButtonColorByVariant(variant)};
  border: ${({ variant }) => (variant === 'outline' ? '1px solid #5a89ff' : 'none')};
  border-radius: 8px;
  width: 100%;

  color: ${({ variant }) => (variant === 'solid' ? '#fff' : '#727274')};
  white-space: nowrap;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  @media ${device.mobileM} {
    min-width: 26px;
  }
`;
