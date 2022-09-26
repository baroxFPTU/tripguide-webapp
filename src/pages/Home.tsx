import Section, { SectionItem } from 'components/common/Section';
import bgImageUrl from 'assets/images/hero-bg.jpg';

function Home() {
  return (
    <div className='Home'>
      <Section bgImageUrl={bgImageUrl}>
        <SectionItem.Heading>Book With Us And Enjoy your Journey!</SectionItem.Heading>
      </Section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a placeat natus debitis mollitia
      vitae maiores voluptas repellendus, totam enim facere sequi repellat libero adipisci possimus
      excepturi. Doloribus, veritatis impedit?
    </div>
  );
}

export default Home;
