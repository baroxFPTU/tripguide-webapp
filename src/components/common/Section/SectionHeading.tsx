import React from 'react';
import styled from 'styled-components';

interface ISectionHeadingProps {
  children?: React.ReactNode;
}

const StyledSectionHeading = styled.h2`
  font-size: 80px;
  line-height: 100px;
  letter-spacing: -0.5%;
  font-weight: 700;
  color: #3b3e45;
  max-width: 70%;
`;

export const SectionHeading = (props: ISectionHeadingProps) => {
  const { children } = props;
  return <StyledSectionHeading>{children}</StyledSectionHeading>;
};
