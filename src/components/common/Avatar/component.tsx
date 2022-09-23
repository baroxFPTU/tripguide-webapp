import React from 'react';
import styled from 'styled-components';
import { device } from 'styles/main';

interface IAvatarProps {
  src?: string;
  alt?: string;
}

const StyledAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  overflow: hidden;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  @media ${device.mobileL} {
    width: 32px;
    height: 32px;
  }
`;

const Avatar = ({
  src = 'https://source.unsplash.com/random',
  alt = 'an Avatar',
}: IAvatarProps) => {
  return (
    <StyledAvatar>
      <img src={src} alt={alt} />
    </StyledAvatar>
  );
};

export default Avatar;
