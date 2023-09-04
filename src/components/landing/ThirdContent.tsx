import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import Modal from '@/components/modal/Modal';

const ThirdContent = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    
    <div className='w-screen lg:block mb-16'>
    <div className=' bg-[#Fff] py-8'>
      <div className='container'>
        <div className='flex items-center justify-between gap-6 md:gap-12'>
          
          <div className='h-full w-[100%] md:w-[40%]'>
            <p className='mb-6 text-3xl font-bold' data-aos='fade-left' data-delay="200">How we work</p>
            <div className='mb-5'>
              <p
                className=' font-semibold lg:text-xl xl:text-xl'
              
              >
                Explore your options
              </p>
              <p className=' mt-1 text-gray-500'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa qui quae est, illo eum voluptatum ratione commodi at officia numquam.
              </p>
            </div>
            <div className='mb-5'>
              <p
                className=' font-semibold lg:text-xl xl:text-xl'
              
              >
                Apply for your preferred choice
              </p>
              <p className=' mt-1 text-gray-500'>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis in praesentium asperiores cumque ea voluptates!
              </p>
            </div>
            <div className='mb-5'>
              <p
                className=' font-semibold lg:text-xl xl:text-xl'
              
              >
                Talk on your terms
              </p>
              <p className=' mt-1 text-gray-500'>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ut quod quidem distinctio, facilis reiciendis!
              </p>
            </div>
          </div>

          <div className='md:w-[60%] w-[100%]'>
            <div data-aos='fade-up-right'>
              <div className='object-contain md:min-h-[60vh] h-[20vh]'>
                <Image
                  src='/assets/svg/how.jpeg'
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ThirdContent;
