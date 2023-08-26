import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';
import Link from 'next/link';

const HeroContent = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className=' '>
      {showModal && <Modal toggleModal={toggleModal} />}
      <div className='relative w-full bg-pattern  bg-no-repeat  bg-origin-content     pl-32'>
        <div className='hidden  items-center justify-between gap-10 lg:flex  '>
          <div className='open font-bold'>
            <p className='text-[48px] leading-[57px] text-ace-black'>
              Looking for your next role?<br /> We've got you covered
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
          <div className='relative  h-[646px] w-[779px]'>
            <motion.div
              animate={{ x: 60 }}
              initial={{ x: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              style={{
                zIndex: '100',
              }}
              className='absolute lg:hidden xl:bottom-[25rem]  xl:block'
            >
              <Image
                src='/assets/svg/hero-image-1.svg'
                alt='image-1'
                width={262}
                height={201}
                className=''
              />
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              initial={{ y: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              className='absolute  right-[15rem] z-[10]'
            >
              <Image
                src='/assets/svg/hero-image-2.svg'
                alt='image-1'
                width={262}
                height={286}
              />
            </motion.div>
            <motion.div
              animate={{ y: -70 }}
              initial={{ y: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              className='absolute top-[30rem] right-[10rem]'
            >
              <Image
                src='/assets/svg/hero-image-4.svg'
                alt='image-1'
                width={262}
                height={258}
              />
            </motion.div>
            <motion.div
              animate={{ x: -350 }}
              initial={{ x: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              style={{
                zIndex: '150',
              }}
              className='absolute top-[15rem] -right-[22rem] xl:top-[24rem] xl:right-[3rem]'
            >
              <Image
                src='/assets/svg/hero-image-3.svg'
                alt='image-1'
                width={262}
                height={258}
              />
            </motion.div>
            <motion.div
              animate={{ x: -350 }}
              initial={{ x: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              style={{
                zIndex: '250',
              }}
              className='absolute top-[20rem] -right-[10rem] xl:top-[24rem] xl:right-[3rem]'
            >
              <Image
                src='/assets/svg/hero-image-5.svg'
                alt='image-1'
                width={98}
                height={77}
              />
            </motion.div>
          </div>
          {/* <div className='relative -top-6 h-[746px] w-[799px]'>
            <Image
              src='/assets/svg/image.png'
              alt='hero image'
              fill={true}
              className='object-contain'
            />
          </div> */}
        </div>
      </div>
      <div className='mt-16 lg:hidden '>
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
          <div className='relative -top-[3rem]'>
            <motion.div
              animate={{ x: 10 }}
              initial={{ x: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              style={{
                zIndex: '100',
              }}
              className='absolute top-[7rem]'
            >
              <Image
                src='/assets/svg/hero-image-1.svg'
                alt='image-1'
                width={180}
                height={135}
              />
            </motion.div>
            <motion.div
              animate={{ y: 50, x: -20 }}
              initial={{ y: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              className='absolute top-8  left-[12rem] z-[10]'
            >
              <Image
                src='/assets/svg/hero-image-2.svg'
                alt='image-1'
                width={159}
                height={193}
              />
            </motion.div>
            <motion.div
              animate={{ y: -110 }}
              initial={{ y: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              className='absolute top-[25rem] left-[16rem]'
            >
              <Image
                src='/assets/svg/hero-image-4.svg'
                alt='image-1'
                width={154}
                height={174}
              />
            </motion.div>
            <motion.div
              animate={{ x: -250, y: 20 }}
              initial={{ x: 0, y: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              style={{
                zIndex: '100',
              }}
              className='absolute top-[15rem] -right-28'
            >
              <Image
                src='/assets/svg/hero-image-3.svg'
                alt='image-1'
                width={162}
                height={158}
              />
            </motion.div>
            <motion.div
              animate={{ x: -250 }}
              initial={{ x: 0 }}
              transition={{
                duration: 2,
                ease: [0.6, 0.05, -0.01, 0.9],
              }}
              style={{
                zIndex: '250',
              }}
              className='absolute top-[20rem] right-[1rem]'
            >
              <Image
                src='/assets/svg/hero-image-5.svg'
                alt='image-1'
                width={58}
                height={47}
              />
            </motion.div>
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
    </div>
  );
};

export default HeroContent;
