import React from 'react';
import styled from 'styled-components';

interface ISectionContentProps {
  children?: React.ReactNode;
}

const StyledSectionContent = styled.div`
  margin-top: 48px;
`;

export const SectionContent = ({ children }: ISectionContentProps) => {
  return <StyledSectionContent>{children}</StyledSectionContent>;
};