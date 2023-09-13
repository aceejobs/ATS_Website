import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import Modal from '@/components/modal/Modal';

const SecondContent = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (

      <div className='w-screen lg:block'>
        <div className=' bg-[#Fff] py-8'>
          <div className='container'>
            <div className='md:flex items-center justify-between gap-6 md:gap-12'>
              <div className='md:w-[60%] w-[100%] mb-4 md:mb-0'>
                <div data-aos='fade-up-right'>
                  <div className='object-contain md:min-h-[60vh] h-[30vh]'>
                    <Image
                      src='/assets/svg/why.jpeg'
                      alt=''
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </div>
              </div>
              <div className='h-full w-[100%] md:w-[40%]'>
                <p className='mb-6 text-3xl font-bold' data-aos='fade-left' data-delay="200">Why Choose Acee</p>
                <div className='mb-5' data-aos='fade-up-right'>
                  <p
                    className=' font-semibold lg:text-xl xl:text-xl'
                  
                  >
                    Your dedicated Career Partners!
                  </p>
                  <p className=' mt-1 text-gray-500'>
                    At Acee, we go the extra mile to ensure your skills and
                    aspirations align perfectly with the jobs that await you.
                  </p>
                </div>
                <div className='mb-5'>
                  <p
                    className=' font-semibold lg:text-xl xl:text-xl'
                  
                  >
                    Unearth Extraordinary Talents.
                  </p>
                  <p className=' mt-1 text-gray-500'>
                  Within our talent reservoir lies a diverse range of candidates, each armed with unique skill sets. Ready to drive your company's vision and aspirations to new horizons.
                  </p>
                </div>
                <div className='mb-5' data-aos='fade-down-left'>
                  <p
                    className=' font-semibold lg:text-xl xl:text-xl'
                  
                  >
                    Your Talent Bridge.
                  </p>
                  <p className=' mt-1 text-gray-500'>
                  We flawlessly connect your openings with top-tier talents, making recruitment a breeze.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
  );
};

export default SecondContent;
