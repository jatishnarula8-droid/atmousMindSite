import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionDemoSection from '../components/SolutionDemoSection';
import TestimonialStatsSection from '../components/TestimonialStatsSection';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionDemoSection />
      <TestimonialStatsSection />
      <CtaSection />
    </>
  );
};

export default Home;
