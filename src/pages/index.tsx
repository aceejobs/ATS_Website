import React from 'react';

import ContactSection from '@/components/landing/ContactSection';
import FifthContent from '@/components/landing/FifthContent';
import Footer from '@/components/landing/Footer';
import FourthContent from '@/components/landing/FourthContent';
import HeroContent from '@/components/landing/HeroContent';
import SecondContent from '@/components/landing/SecondContent';
import SeventhContent from '@/components/landing/SeventhContent';
import SixthContent from '@/components/landing/SixthContent';
import ThirdContent from '@/components/landing/ThirdContent';
import NavBar from '@/components/navBar/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <FifthContent />
      <SixthContent />
      <SeventhContent />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
