import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const data = [
  {
    text: 'End-to-End Recruitment',
    image: '/assets/svg/end-end.svg',
    bgColor: '#ccd3ff',
  },
  {
    text: 'Resume Writing',
    image: '/assets/svg/writing.svg',
    bgColor: '#ffcfd2',
  },
  {
    text: 'Interview Coaching',
    image: '/assets/svg/interview.svg',
    bgColor: '#ccd3ff',
  },
  {
    text: 'Onboarding Support',
    image: '/assets/svg/onboard.svg',
    bgColor: '#ffcfd2',
  },
  {
    text: 'Salary Negotiation',
    image: '/assets/svg/salary.svg',
    bgColor: '#ccd3ff',
  },
];
const SeventhContent = () => {
  return (
    <div id='services' className='bg-[#F4F7FF] md:pt-32 pt-2'>
      <div className='relative -top-[10rem] hidden h-[150px] w-full md:block'>
        <Image
          src='/assets/svg/line-small.svg'
          alt='hero image'
          fill={true}
          className='object-contain'
        />
      </div>
      <div className=' relative mt-32 lg:-top-[12rem] lg:mt-0'>
        <div className='flex flex-col items-center justify-center overflow-auto overflow-x-hidden '>
          <motion.p
            animate={{
              x: '100%',
            }}
            whileInView={{
              x: 0,
            }}
            initial={{
              x: '5%',
            }}
            transition={{
              duration: 0.7,
            }}
            className='open mb-3  text-right text-[34px] font-bold xl:text-center'
          >
            Our Services
          </motion.p>
        </div>

        <div className=' mt-6 px-20'>
          <div className='mt-10 flex flex-wrap items-center justify-center gap-6 lg:gap-10    lg:px-0'>
            {data.map((item, index) => (
              <div key={index} className='flex items-center gap-2  '>
                <div className=' service-card  flex  w-[285px]  items-center gap-10 rounded-[5px] py-4 px-4  lg:w-[361px]  lg:pl-6'>
                  <div
                    style={{
                      backgroundColor: item.bgColor,
                    }}
                    className='relative flex h-[110px] w-[110px] items-center justify-center rounded-[5px] '
                  >
                    <Image src={item.image} alt='' width={45} height={45} />
                  </div>
                  <p className='text-left font-bold'>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhContent;
