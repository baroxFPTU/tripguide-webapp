import Section, { SectionItem } from 'components/common/Section';
import { Place } from 'components/RecommendPlace/RecommendPlaceCard';
import RecommendPlaceGrid from 'components/RecommendPlace/RecommendPlaceGrid';

const listPlaces: Place[] = [
  {
    id: 1,
    name: 'Batu, East Java',
    noOfDestinations: 86,
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    id: 2,
    name: 'Batu, East Java',
    noOfDestinations: 86,
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    id: 3,
    name: 'Batu, East Java',
    noOfDestinations: 86,
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    id: 4,
    name: 'Batu, East Java',
    noOfDestinations: 86,
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    id: 5,
    name: 'Batu, East Java',
    noOfDestinations: 86,
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    id: 6,
    name: 'Batu, East Java',
    noOfDestinations: 86,
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    id: 7,
    name: 'Batu, East Java',
    noOfDestinations: 86,
    imageUrl: 'https://source.unsplash.com/random',
  },
  {
    id: 8,
    name: 'Batu, East Java',
    noOfDestinations: 86,
    imageUrl: 'https://source.unsplash.com/random',
  },
];

const RecommendPlaceSection = () => {
  return (
    <Section className='RecommendSection' style={{ marginTop: '250px' }}>
      <SectionItem.Heading position='center'>Search a best place in the world</SectionItem.Heading>
      <SectionItem.Description position='center'>
        Whothor you're looking for places for a vacation. Wo arc horo to Guido you about tho details
        you neod to check in and ease your trips in advance
      </SectionItem.Description>
      <SectionItem.Content>
        <RecommendPlaceGrid listPlaces={listPlaces} />
      </SectionItem.Content>
    </Section>
  );
};

export default RecommendPlaceSection;
