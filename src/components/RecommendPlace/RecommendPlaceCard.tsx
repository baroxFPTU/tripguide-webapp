import React from 'react';
import styled from 'styled-components';

export interface Place {
  id: string | number;
  name: string;
  noOfDestinations: number;
  imageUrl: string;
}

interface IRecommendPlaceCardProps {
  data: Place;
}

const StyledRecommendPlaceCard = styled.div.attrs({
  className: 'RecommendPlaceCard',
})`
  border: 1px solid #e9eaee;
  padding: 30px;
  border-radius: 10px;
  &:hover {
    background: #fff;
    border: none;
    box-shadow: 8px 28px 50px -13px rgb(0 0 0 / 10%);
  }
  .placeName {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .placeDestination {
    color: #a1a1a3;
  }
  .placeImage {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 18px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const RecommendPlaceCard = ({ data }: IRecommendPlaceCardProps) => {
  return (
    <StyledRecommendPlaceCard>
      <div className='placeImage'>
        <img src={data.imageUrl} alt={data.name} />
      </div>
      <div className='placeInfo'>
        <h3 className='placeName'>{data.name}</h3>
        <span className='placeDestination'>{data.noOfDestinations} Destinations</span>
      </div>
    </StyledRecommendPlaceCard>
  );
};

export default RecommendPlaceCard;
