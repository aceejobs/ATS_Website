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
    <div>
      <div className='relative -top-16 hidden lg:block'>
        <div className=' flex items-center justify-between   p-32'>
          <div className='w-[49%]'>
            <div className='mt-10 h-full '>
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
                <p className='mb-9 font-black leading-[60px] text-ace-black lg:text-[36px] xl:text-[48px]  '>
                  Your Skill Should Be Equal To Your Pay
                </p>
              </motion.div>
              <p className=' font-light  leading-[32px]'>
                We understand the pain that comes with your salary NOT equal to
                your skills. Our aim is to diligently find you the right job
                where you can move quickly towards your career goals in the
                right frame of mind.
              </p>
              <p
                onClick={toggleModal}
                className=' mt-4 cursor-pointer text-[20px] font-[700] text-ace-blue'
              >
                Begin Your Journey
              </p>
            </div>
          </div>
          <div className='relative h-[431px] w-[49%] pr-20'>
            <Image
              src='/assets/svg/pay-big.svg'
              alt=''
              fill={true}
              className='object-contain'
            />
          </div>
        </div>
      </div>
      <div className='mt-14  px-6 text-center lg:hidden '>
        <div className='relative h-[254px] w-full rounded-[5px] '>
          <Image
            src='/assets/svg/talent.svg'
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
          className='mt-16'
        >
          <p className='mb-5  text-[24px] font-black leading-[30px]  text-ace-black medium-phone:text-[30px] large-phone:text-[34px] '>
            ACEE Seamlessly And Efficiently Connects Employers And Talents
          </p>
        </motion.div>

        <p className='mt-6 text-center  font-light leading-[32px]'>
          Managing a company is already hard, don’t add HIRING to that. Let’s
          help you get the best talents. We do the end-to-end recruitment for
          you, taking the burden of vetting candidates off you
        </p>
        <p
          onClick={toggleModal}
          className='mt-4 mb-32 text-[20px] font-[700] text-ace-blue'
        >
          Take Your First Step
        </p>
      </div>
      {showModal && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default ThirdContent;
