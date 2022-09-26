import { device } from './../../../styles/main';
import styled from 'styled-components';
import { ISectionProps } from './component';

export const Section = styled.section<ISectionProps>`
  background: ${(props) => (props.bgImageUrl ? `url(${props.bgImageUrl})` : 'transparent')};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
`;

export const SectionWrapper = styled.div`
  max-width: calc(100% - 180px * 2);
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  align-items: center;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;
