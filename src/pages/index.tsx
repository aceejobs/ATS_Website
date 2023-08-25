import React from 'react';

import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import HeroContent from '@/components/landing/HeroContent';
import SecondContent from '@/components/landing/SecondContent';
import SeventhContent from '@/components/landing/SeventhContent';
import ThirdContent from '@/components/landing/ThirdContent';
import NavBar from '@/components/navBar/NavBar';

const Home = () => {
  return (
    <>
      <HeroContent />
      <SecondContent />
      <ThirdContent />
      <SeventhContent />
      <ContactSection />
    </>
  );
};

export default Home;
