import React from 'react';

import * as Styled from './styles';

export interface ISectionProps {
  bgImageUrl?: string;
  children?: React.ReactNode;
}

const Section = (props: ISectionProps) => {
  const { bgImageUrl, children } = props;
  return (
    <Styled.Section bgImageUrl={bgImageUrl}>
      <Styled.SectionWrapper>{children}</Styled.SectionWrapper>
    </Styled.Section>
  );
};

export default Section;
