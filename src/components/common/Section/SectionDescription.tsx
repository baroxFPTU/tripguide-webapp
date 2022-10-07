import React from 'react';
import { ISectionHeadingProps, IStyledHeadingProps } from './SectionHeading';
import * as Styled from './styles';

export interface ISectionDescriptionProps extends IStyledHeadingProps, ISectionHeadingProps {}

export const SectionDescription = ({ position, children }: ISectionDescriptionProps) => {
  return (
    <Styled.SectionDescription position={position || 'left'}>{children}</Styled.SectionDescription>
  );
};
