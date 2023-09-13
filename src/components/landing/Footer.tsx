import Image from 'next/image';
import React from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='relative  mt-20 w-full bg-[#F15D55] px-6 py-10 lg:mt-0  lg:px-32'>
      <div className='flex justify-between gap-4 lg:items-center'>
        <div className='relative  flex h-[43px]  w-[83px] items-center justify-center lg:h-[59px] lg:w-[116px] '>
          <Image
            src='/assets/svg/logo.svg'
            alt='logo'
            fill={true}
            className='object-contain '
          />
        </div>
        <div>
          <p className='mb-6 font-bold text-ace-blue'>Navigations</p>
          <div className='flex flex-col gap-3 text-ace-blue md:gap-6 lg:flex-row'>
            <p onClick={() => scroll.scrollToTop()} className='cursor-pointer'>
              Home
            </p>
            <Link to='services' smooth={true} duration={1000}>
              <p className='cursor-pointer'>Services</p>
            </Link>
            <Link to='about' smooth={true} duration={1000}>
              <p className='cursor-pointer'>About</p>
            </Link>
            <Link to='contact' smooth={true} duration={1000}>
              <p className='cursor-pointer'>Contact Us</p>
            </Link>
          </div>
        </div>
        <div>
          <p className='mb-6 font-bold text-ace-blue'>Social Links</p>
          <div className='flex  gap-2 text-ace-blue lg:gap-6'>
            <a
              href=' https://www.linkedin.com/company/acee-recruitment/'
              target='_blank'
              className='relative flex h-[33px] w-[33px] items-center justify-center rounded-full border border-ace-blue'
            >
              <Image
                alt='social'
                src='/assets/svg/linkin.svg'
                width={11}
                height={11}
              />
            </a>
            <a
              href=' https://twitter.com/Aceejobs?t=CH0Rzu5T2VEWLZ4z6jo9AQ&s=09'
              target='_blank'
              className='relative flex h-[33px] w-[33px] items-center justify-center rounded-full border border-ace-blue'
            >
              <Image
                alt='social'
                src='/assets/svg/twitter.svg'
                width={10}
                height={9}
              />
            </a>
            <a
              href='https://instagram.com/aceerecruitment?igshid=YmMyMTA2M2Y='
              target='_blank'
              className='relative flex h-[33px] w-[33px] items-center justify-center rounded-full border border-ace-blue'
            >
              <Image
                alt='social'
                src='/assets/svg/insta.svg'
                width={14}
                height={13}
              />
            </a>
          </div>
        </div>
      </div>
      <hr className='my-10 border border-[#4963fb]' />
      <p className='text-center text-ace-blue'>
        &#169; Acee Workforce Solutions
      </p>
    </div>
  );
};

export default Footer;
