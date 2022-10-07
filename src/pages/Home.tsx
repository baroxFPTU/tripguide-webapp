import Section, { SectionItem } from 'components/common/Section';
import bgImageUrl from 'assets/images/hero-bg.jpg';
import BookingWidget from 'features/booking/components/BookingWidget';
import Button from 'components/common/Button';

function Home() {
  return (
    <div className='Home'>
      <Section bgImageUrl={bgImageUrl}>
        <SectionItem.HeroHeading
          position='left'
          style={{ marginBottom: '80px', marginTop: '80px' }}
        >
          Book With Us <br /> And Enjoy your <br /> Journey!
        </SectionItem.HeroHeading>
        <BookingWidget />
      </Section>
      {/* <Section>
        <SectionItem.Heading position='center'>
          Search a best place in the world
        </SectionItem.Heading>
        <Button>Test</Button>
      </Section> */}
    </div>
  );
}

export default Home;
