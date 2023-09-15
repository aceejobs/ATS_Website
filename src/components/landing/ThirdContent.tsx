import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { AiOutlineFileSearch } from "react-icons/ai";
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
          <div className='md:flex items-center justify-between gap-6 md:gap-12'>
           
          <div className='md:hidden w-[100%] md:w-[60%] order-first'>
              <div data-aos='fade-up-right'>
                <div className='h-[30vh] object-contain md:min-h-[60vh] mb-4'>
                  <Image
                    src='/assets/svg/how.jpeg'
                    alt=''
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </div>
           
            <div className='h-full w-[100%] md:w-[40%] order-last md:order-first'>
              <p
                className='mb-6 text-3xl font-bold'
                data-aos='fade-left'
                data-delay='200'
              >
                How we work
              </p>
              <div className='mb-8' data-aos='fade-up-right'>
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
                Explore the array of possibilities available to you on our platform. 
<br/><br/>
              Discover how our platform can be tailored to meet your specific needs, whether it's in recruitment, employee management, payroll, or analytics. 

                </p>
              </div>
              <div className='mb-8' data-aos='fade-left'>
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
                Explore choices that best aligns with your needs and goals. Whether it's optimizing your hiring process, streamlining onboarding, or enhancing employee engagement, our platform offers a range of options. 
<br/><br/>
Select the solution that suits your organization's unique requirements and start reaping the benefits of a more efficient and productive workforce. Your preferred choice awaits your action.

                </p>
              </div>
              <div className='mb-8' data-aos='fade-down-right'>
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
                Every engagement is done on your terms. Tailor your interactions to match your organization's specific needs. 
<br/><br/>
We empower you to shape your experience and make decisions that align precisely with your recruitment and HR objectives. In short, leverage our platform on your terms to drive efficiency and success in your workforce management endeavors.

                </p>
              </div>
            </div>

            <div className='hidden md:block w-[100%] md:w-[60%] order-first'>
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
