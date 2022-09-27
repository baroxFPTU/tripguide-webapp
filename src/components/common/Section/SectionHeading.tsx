import React, { ReactComponentElement } from 'react';
import styled, { StyledComponent } from 'styled-components';

export interface IStyledHeadingProps {
  position?: 'left' | 'right' | 'center';
}
export interface ISectionHeadingProps extends IStyledHeadingProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export function applyHeadingStyled(Component: any) {
  return styled(Component)<IStyledHeadingProps>`
    text-align: ${(props) => props.position};
    width: 100%;
  `;
}

const StyledSectionHeading = applyHeadingStyled(styled.h2<ISectionHeadingProps>`
  color: #3b3e45;
  font-size: 48px;
`);

export const SectionHeading = ({ children, position, ...props }: ISectionHeadingProps) => {
  return (
    <StyledSectionHeading position={position} {...props}>
      {children}
    </StyledSectionHeading>
  );
};
