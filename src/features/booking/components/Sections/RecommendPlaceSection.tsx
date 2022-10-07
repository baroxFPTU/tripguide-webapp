import Section, { SectionItem } from 'components/common/Section';

const RecommendPlaceSection = () => {
  return (
    <Section className='RecommendSection'>
      <SectionItem.Heading position='center'>Search a best place in the world</SectionItem.Heading>
      <SectionItem.Description position='center'>
        Whothor you're looking for places for a vacation. Wo arc horo to Guido you about tho details
        you neod to check in and ease your trips in advance
      </SectionItem.Description>
      <SectionItem.Content></SectionItem.Content>
    </Section>
  );
};

export default RecommendPlaceSection;
