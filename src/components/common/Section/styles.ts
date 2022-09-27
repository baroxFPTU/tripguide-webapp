import { device } from './../../../styles/main';
import styled from 'styled-components';
import { ISectionProps } from './component';

export const Section = styled.section<ISectionProps>`
  position: relative;
  background: ${(props) => (props.bgImageUrl ? `url(${props.bgImageUrl})` : 'transparent')};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    right: 0;
    background: ${(props) =>
      props.bgImageUrl && 'linear-gradient(130deg, rgba(218, 235, 243, 0.8), 30%, transparent)'};
    z-index: 1;
  }
  /* background-attachment: fixed; */
`;

export const SectionWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  max-width: calc(100% - 180px * 2);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;

  position: relative;
  z-index: 9;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;
