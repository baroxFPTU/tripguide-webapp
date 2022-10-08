import React from 'react';
import styled from 'styled-components';
import RecommendPlaceCard, { Place } from './RecommendPlaceCard';

interface IRecommendPlaceGridProps {
  listPlaces: Place[];
}

const StyledRecommendPlaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  width: 100%;
`;

const RecommendPlaceGrid = ({ listPlaces }: IRecommendPlaceGridProps) => {
  return (
    <StyledRecommendPlaceGrid>
      {listPlaces.map((place) => (
        <RecommendPlaceCard data={place} />
      ))}
    </StyledRecommendPlaceGrid>
  );
};

export default RecommendPlaceGrid;
