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
    <>
    <div className="bg-white py-8 md:py-12 mt-10">
      <div className="container text-center md:w-1/2 mx-auto">
        <p className="text-3xl font-semibold mb-6">Subscribe Newsletter</p>
        <div className="">
                <p className='text-xl mb-3 text-gray-500'>Find your next great opportunity!</p>

                <div className="flex bg-white items-center border p-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 rounded-lg">
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
    </div>
    <div className='bg-[#F4F7FF] py-8 md:py-12'>
      <div className='container pb-12'>
        <div className='md:flex gap-8'>
          <div className='md:w-[35%] mb-3'>
            <Image
              src='/assets/svg/logo.svg'
              alt='logo'
              width={150}
              height={150}
              className='object-contain '
            />
            <p className='text-lg font-medium'>Where talent meet opportunity</p>

            <div className='flex  gap-2 lg:gap-6 mt-4'>
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
          <div className="md:w-[65%]">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
            <div>
            <p className='mb-2 text-lg font-semibold'>Quick Links</p>
            <ul className='text-gray-500'>
              <li className='mb-1'>
                <Link href='/'>Home</Link>
              </li>
              <li className='mb-1'>
                <Link href='/blog'>Blog</Link>
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
              <li className='mb-2'>
                <a href='mailto:careers@aceejobs.com'>careers@aceejobs.com</a>
              </li>
              <li className='mb-1'>
                
                <span className='text-gray-600 text-[15px]'>Mulliner Towers, 39 Alfred Rewane Road Lagos 101233.</span>
              </li>
            </ul>
          </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
    </>
  );
};

export default Footer;
