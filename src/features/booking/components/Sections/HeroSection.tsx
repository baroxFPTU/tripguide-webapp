import React from 'react';
import Section, { SectionItem } from 'components/common/Section';
import bgImageUrl from 'assets/images/hero-bg.jpg';
import BookingWidget from 'features/booking/components/BookingWidget';

const HeroSection = () => {
  return (
    <Section bgImageUrl={bgImageUrl}>
      <SectionItem.HeroHeading position='left' style={{ marginBottom: '80px', marginTop: '80px' }}>
        Book With Us <br /> And Enjoy your <br /> Journey!
      </SectionItem.HeroHeading>
      <BookingWidget />
    </Section>
  );
};

export default HeroSection;
