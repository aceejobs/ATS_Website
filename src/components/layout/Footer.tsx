import Image from 'next/image';
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';

const Footer = () => {

  const [email, setEmail] = useState('');

  const handleEmailChange = () => {
    // setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Add your subscribe logic here, e.g., send the email to your server
    console.log('Subscribing with email:', email);
    // Clear the email input after subscribing
    setEmail('');
  };
  return (
    <div className='mt-20 bg-[#F4F7FF] py-8 md:py-12'>
      <div className='container pb-12'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
          <div>
            <Image
              src='/assets/svg/logo.svg'
              alt='logo'
              width={150}
              height={150}
              className='object-contain '
            />
          </div>
          <div>
            <p className='mb-2 text-lg font-semibold'>Navigation</p>
            <ul className='text-gray-500'>
              <li className='mb-1'>
                <Link href='/'>Home</Link>
              </li>
              <li className='mb-1'>
                <Link href='/jobs'>Job List</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className='mb-2 text-lg font-semibold'>Company</p>
            <ul className='text-gray-500'>
              <li className='mb-1'>
                <Link href='/about'>About Us</Link>
              </li>
              <li className='mb-1'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className='mb-2 text-lg font-semibold'>Contact</p>
            <ul className='text-gray-500'>
              <li className='mb-1'>
                <a href='tel:+2348165821749'>+2348165821749</a>
              </li>
              <li className='mb-1'>
                <a href='mailto:info@aceejobs.com'>info@aceejobs.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <hr />
        <div className='container pt-12'>
          <div className="md:flex justify-between items-center">
            <div className='md:w-3/5 py-2'>
              <div className="md:flex">
                <p className='text-xl font-semibold md:w-2/5'>Find your next great opportunity!</p>

                <div className="flex bg-white items-center border p-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 rounded-lg md:w-3/5">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 border-none"
        value={email}
        onChange={handleEmailChange}
      />
      <button
        onClick={handleSubscribe}
        className="px-6 py-3 bg-[#0017b7] text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
      >
        Subscribe
      </button>
    </div>
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
