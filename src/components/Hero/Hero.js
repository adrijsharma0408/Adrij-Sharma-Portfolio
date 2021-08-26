import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to Adrij Sharma's<br />
          Personal Portfolio!
        </SectionTitle>
        <SectionText>
        An enthusiastic undergrad, eager to learn through perseverance.<br/>
        I claim to have excellent organizational skills.<br/>
        I am motivated to fatten and excel in computer science through exhaustive indagation.
        </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/adrijsharma/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;