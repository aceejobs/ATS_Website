import React from 'react';

import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import HeroContent from '@/components/landing/HeroContent';
import SecondContent from '@/components/landing/SecondContent';
import SeventhContent from '@/components/landing/SeventhContent';
import ThirdContent from '@/components/landing/ThirdContent';
import NavBar from '@/components/navBar/NavBar';
import FeaturedJob from '@/components/landing/FeaturedJob';
import Testimonial from '@/components/landing/Testimonial';

const Home = () => {
  return (
    <>
      <HeroContent />
      <SecondContent />
      <ThirdContent />
      <SeventhContent />
      <FeaturedJob/>
      <Testimonial/>
      
    </>
  );
};

export default Home;
