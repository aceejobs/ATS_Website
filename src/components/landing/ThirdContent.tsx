import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { AiOutlineFileSearch } from "react-icons/Ai";
import { TfiWrite } from "react-icons/tfi";
import { PiWechatLogo } from "react-icons/pi";


const ThirdContent = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className='mb-16 w-screen lg:block'>
      <div className=' bg-[#Fff] py-8'>
        <div className='container'>
          <div className='flex items-center justify-between gap-6 md:gap-12'>
            <div className='h-full w-[100%] md:w-[40%]'>
              <p
                className='mb-6 text-3xl font-bold'
                data-aos='fade-left'
                data-delay='200'
              >
                How we work
              </p>
              <div className='mb-8'>
                <div className='flex items-center gap-4'>
                  <div className='shadow h-[3rem] w-[3rem] font-light flex items-center justify-center relative rounded-[5px] bg-[#F4F7FF] text-[#0017b7]'>
                  <AiOutlineFileSearch  className='text-xl font-semibold'/>
                  
                  </div>
                  <div>
                    <p className=' font-semibold lg:text-xl xl:text-xl'>
                      Explore your options
                    </p>
                  </div>
                </div>

                <p className=' mt-1 text-gray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  qui quae est, illo eum voluptatum ratione commodi at officia
                  numquam.
                </p>
              </div>
              <div className='mb-8'>
              <div className='flex items-center gap-4'>
                  <div className='shadow h-[3rem] w-[3rem] font-light flex items-center justify-center relative rounded-[5px] bg-[#F4F7FF] text-[#0017b7]'>
                  <TfiWrite />
                  
                  </div>
                  <div>
                    <p className=' font-semibold lg:text-xl xl:text-xl'>
                    Apply for your preferred choice

                    </p>
                  </div>
                </div>
                
                <p className=' mt-1 text-gray-500'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis in praesentium asperiores cumque ea voluptates!
                </p>
              </div>
              <div className='mb-8'>
              <div className='flex items-center gap-4'>
                  <div className='shadow h-[3rem] w-[3rem] font-light flex items-center justify-center relative rounded-[5px] bg-[#F4F7FF] text-[#0017b7]'>
                  <PiWechatLogo  className='text-xl'/>
                  
                  </div>
                  <div>
                    <p className=' font-semibold lg:text-xl xl:text-xl'>
                    Talk on your terms
                    </p>
                  </div>
                </div>
                
                <p className=' mt-1 text-gray-500'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  ut quod quidem distinctio, facilis reiciendis!
                </p>
              </div>
            </div>

            <div className='w-[100%] md:w-[60%]'>
              <div data-aos='fade-up-right'>
                <div className='h-[20vh] object-contain md:min-h-[60vh]'>
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
