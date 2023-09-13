import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';
import Link from 'next/link';
import Brands from '@/components/landing/Brands';


const HeroContent = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className=' bg-[#F4F7FF] py-12 '>
      {showModal && <Modal toggleModal={toggleModal} />}
      <div className='relative w-full bg-pattern  bg-no-repeat  bg-origin-content  pl-32'>
        <div className='hidden  items-center justify-between gap-10 lg:flex  '>
          <div className='open font-bold'>
            <p className='text-[2.2rem] leading-[57px] text-[#231459]'>
              Looking for your next role?<br/> We've got you covered
            </p>
            <p className='text-[18px] font-light leading-[31px] mt-6'>
              We are committed to being the bridge <br /> between you and your
              career goals.
            </p>
            <div className='mt-6 flex items-center gap-3'>
              {/* <div onClick={toggleModal}>
                <Button className='h-[52px] w-[150px] '> Hire Talent</Button>
              </div> */}
              <Link  href="/jobs">
                <Button className='h-[52px] w-[150px] ' variant='outline'>
                  {' '}
                  Find a Job
                </Button>
              </Link>
            </div>
          </div>
          <div className='relative  h-[506px] w-[779px]'>
          <div data-aos='zoom-in-up'>
          <div className="image-container md:mt-8">
          <Image
                src='/assets/svg/home.svg'
                alt='image-1'
                // layout='contain'
                width={780}
                height={600}
              />
          </div>
          </div>
        </div>
      </div>

      
      </div>
      <div className='mt-16 lg:hidden  '>
        <p className='open px-6 text-center text-[48px] font-bold leading-[57px] text-ace-black'>
          Get The Best Talents For The Role
        </p>
        <p className='open mt-4 px-6  text-center text-[18px] font-light leading-[28px]'>
          We are committed to being the bridge between you and your career
          goals.
        </p>
        <div className='mt-6 flex items-center justify-center gap-3'>
          <div onClick={toggleModal}>
            <Button className='h-[52px] w-[150px] '>Get Started</Button>
          </div>
          <Link href='/contact'>
            <Button className='h-[52px] w-[150px] ' variant='outline'>
              {' '}
              Contact us
            </Button>
          </Link>
        </div>
        <div className='relative  h-[488px]  w-full overflow-y-auto overflow-x-hidden bg-patternMobile bg-no-repeat'>
        <div className="image-container">
          <Image
                src='/assets/svg/home-img.svg'
                alt='image-1'
                layout='fill'
              />
          </div>
        </div>
        {/* <div className='relative mt-8 h-[359px]  w-[339px]'>
          <Image
            src='/assets/svg/hero-mobile.png'
            alt='hero image'
            fill={true}
            className='object-contain'
          />
        </div> */}
      </div>
      <hr  className='mt-8'/>
      <div>
        <Brands/>
      </div>
     
    </div>
  );
};

export default HeroContent;
