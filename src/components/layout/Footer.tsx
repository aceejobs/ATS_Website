import Image from 'next/image';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-20 bg-[#F4F7FF]'>
      <div className='container py-8'>
        <div className='grid grid-cols-4 gap-4'>
          <div>
            <Image
              src='/assets/svg/logo.svg'
              alt='logo'
              width={200}
              height={200}
              className='object-contain '
            />
          </div>
          <div>
            <p className='mb-4 text-lg font-semibold'>Navigation</p>
            <ul className='text-gray-500'>
              <li className='mb-2'>
                <Link href='/'>Home</Link>
              </li>
              <li className='mb-2'>
                <Link href='/jobs'>Job List</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className='mb-4 text-lg font-semibold'>Company</p>
            <ul className='text-gray-500'>
              <li className='mb-2'>
                <Link href='/about'>About Us</Link>
              </li>
              <li className='mb-2'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className='mb-4 text-lg font-semibold'>Contact</p>
            <ul className='text-gray-500'>
              <li className='mb-2'>
                <a href='tel:+2348165821749'>+2348165821749</a>
              </li>
              <li className='mb-2'>
                <a href='mailto:info@aceejobs.com'>info@aceejobs.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <hr />
        <div className='container py-8'>
          <div className="md:flex justify-between">
            <div className='md:w-3/5'>
              <div className="md:flex">
                <p className='text-xl font-semibold'>Find your next great opportunity!</p>
              </div>
            </div>
            <div>
          <div className='flex  gap-2 lg:gap-6'>
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
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
