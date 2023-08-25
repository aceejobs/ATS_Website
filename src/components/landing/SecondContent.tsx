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
    <div className='mt-8 md:mt-14'>
      {showModal && <Modal toggleModal={toggleModal} />}

      <div className='hidden w-screen lg:block'>
        <div className='wrapper'>
          {/* <div className='words'>
            <p className=' word text-center text-[34px] font-[700] leading-[52px] text-ace-blue'>
              Are you the best talent for the role?
            </p>
            <p className=' word text-center text-[34px] font-[700] leading-[52px] text-ace-blue'>
              Do You Need the Best Talents for the Role
            </p>
            <p className=' word text-center text-[34px] font-[700] leading-[52px] text-ace-blue'>
              Looking to be HIRED or HIRE?
            </p>
            <p className=' word text-center text-[34px] font-[700] leading-[52px] text-ace-blue'>
              Acee Will Help You Get Hired Or Help You Hire
            </p>
          </div> */}
        </div>

        <div className='mt-6  bg-[#F4F7FF] py-16'>
          <div className="container">
            <div className="flex items-center justify-between ">
            <div className='relative h-[411px] w-[100%]'>
            <Image
              src='/assets/svg/talent-big.svg'
              alt=''
              fill={true}
              className='object-contain'
            />
          </div>
          <div className='h-full w-[100%]'>
            <motion.div
              initial={{
                y: 150,
                opacity: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
            >
              <p className=' font-black leading-[60px] text-ace-black lg:text-[36px] xl:text-[42px] '>
                ACEE Seamlessly And Efficently Connects Employers And Talents
              </p>
            </motion.div>
            <p className=' font-light  leading-[32px] mt-6'>
              Managing a company is already hard, don’t add HIRING to that.
              Let’s help you get the best talents. We do the end-to-end
              recruitment for you, taking the burden of vetting candidates off
              you
            </p>
            <p
              onClick={toggleModal}
              className=' mt-4 cursor-pointer text-[20px] font-[700] text-ace-blue'
            >
              Take Your First Step
            </p>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 px-6  text-center lg:hidden '>
        <div className='relative h-[254px] w-full rounded-[5px] '>
          <Image
            src='/assets/svg/pay-image-2.svg'
            alt=''
            fill={true}
            className='object-cover'
          />
        </div>
        <motion.div
          initial={{
            y: 150,
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className='mt-10'
        >
          <p className='mb-4 text-[24px] font-black leading-[30px]  text-ace-black medium-phone:text-[30px] large-phone:text-[34px] '>
            Your Skill Should Be Equal To Your Pay
          </p>
        </motion.div>
        <p className='mt-6 text-center  font-light leading-[32px]'>
          We understand the pain that comes with your salary NOT equal to your
          skills. Our aim is to diligently find you the right job where you can
          move quickly towards your career goals in the right frame of mind.
        </p>
        <p
          onClick={toggleModal}
          className='mt-4 text-[20px] font-[700] text-ace-blue'
        >
          Begin Your Journey
        </p>
      </div>
    </div>
  );
};

export default SecondContent;
