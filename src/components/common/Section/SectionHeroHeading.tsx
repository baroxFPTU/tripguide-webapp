import React from 'react';
import styled from 'styled-components';
import { applyHeadingStyled, ISectionHeadingProps, IStyledHeadingProps } from './SectionHeading';

interface IStyledSectionHeroHeading extends IStyledHeadingProps {}

const StyledSectionHeroHeading = applyHeadingStyled(
  styled.h1.attrs({
    className: 'hero',
  })<IStyledSectionHeroHeading>`
    color: #3b3e45;
  `
);

export const SectionHeroHeading = ({ children, position, ...props }: ISectionHeadingProps) => {
  return (
    <StyledSectionHeroHeading position={position} {...props}>
      {children}
    </StyledSectionHeroHeading>
  );
};
