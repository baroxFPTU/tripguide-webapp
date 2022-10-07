import React from 'react';
import { IAcceptAnyProps } from 'types/common';

import * as Styled from './styles';

export interface ISectionProps extends IAcceptAnyProps {
  bgImageUrl?: string;
  children?: React.ReactNode;
}

const Section = ({ bgImageUrl, children, ...props }: ISectionProps) => {
  return (
    <Styled.Section bgImageUrl={bgImageUrl} {...props}>
      <Styled.SectionWrapper>{children}</Styled.SectionWrapper>
    </Styled.Section>
  );
};

export default Section;
