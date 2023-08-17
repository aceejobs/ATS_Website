import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const FifthContent = () => {
  return (
    <>
      <div className='-top-20 mt-32 hidden justify-between pl-32 lg:flex '>
        <div>
          <motion.p
            initial={{
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            whileInView={{
              y: 150,
            }}
            className='mt-[20rem] text-[30px]'
          >
            Our Core
          </motion.p>
          <motion.p
            initial={{
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            whileInView={{
              y: -150,
            }}
            className='mt-[20rem] text-[30px]'
          >
            Values
          </motion.p>
        </div>
        <div className='fifth-card p-28 text-white'>
          <div>
            <p className='text-[24px] font-[700]'>Integrity</p>
            <p className='mt-3 text-[16px] font-light leading-[32px]'>
              We are committed to acting with honesty, transparency, and ethical
              behaviour in all our interactions with job seekers and employers.
            </p>
          </div>
          <div className='mt-14'>
            <p className='text-[24px] font-[700]'>Excellence</p>
            <p className='mt-3 text-[16px] font-light leading-[32px]'>
              We strive to deliver the highest quality recruitment solutions
              that exceed expectations and help job seekers and employers
              achieve their goals.
            </p>
          </div>
          <div className='mt-14'>
            <p className='text-[24px] font-[700]'>Collaboration</p>
            <p className='mt-3 text-[16px] font-light leading-[32px]'>
              We believe that working together as a team with our clients and
              partners is essential to achieving success. <br /> Personalised
              service – We believe in treating each job seeker and employer as
              an individual with unique needs and preferences, and providing
              tailored recruitment solutions accordingly.
            </p>
          </div>
          <div className='mt-14'>
            <p className='text-[24px] font-[700]'>Innovation</p>
            <p className='mt-3 text-[16px] font-light leading-[32px]'>
              We are constantly seeking new and better ways to improve our
              recruitment services and stay ahead of industry trends. <br />{' '}
              Respect – We treat everyone with respect, dignity, and empathy,
              regardless of their background, status, or beliefs.
            </p>
          </div>
          <div className='mt-14'>
            <p className='text-[24px] font-[700]'>Professionalism</p>
            <p className='mt-3 text-[16px] font-light leading-[32px]'>
              We conduct ourselves with the highest level of professionalism,
              accountability, and responsibility, and always strive to uphold
              the reputation of our industry.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-24 lg:hidden'>
        <p className='mb-6 text-center text-[24px] font-bold'>
          Our Core Values
        </p>
        <div className='bg-ace-blue px-6 py-10'>
          <div className=' text-justify text-white'>
            <div>
              <div className='flex  items-start gap-4'>
                <Image
                  src='/assets/svg/mark.svg'
                  alt='mark'
                  height={18}
                  width={18}
                />
                <div>
                  <p className='text-[24px] font-[700]'>Integrity</p>
                  <p className='mt-3 text-[16px] font-light leading-[32px]'>
                    We are committed to acting with honesty, transparency, and
                    ethical behaviour in all our interactions with job seekers
                    and employers.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-14  flex items-start gap-4'>
              <Image
                src='/assets/svg/mark.svg'
                alt='mark'
                height={18}
                width={18}
              />
              <div>
                <p className='text-[24px] font-[700]'>Excellence</p>
                <p className='mt-3 text-[16px] font-light leading-[32px]'>
                  We strive to deliver the highest quality recruitment solutions
                  that exceed expectations and help job seekers and employers
                  achieve their goals.
                </p>
              </div>
            </div>
            <div className='mt-14  flex items-start gap-4'>
              <Image
                src='/assets/svg/mark.svg'
                alt='mark'
                height={18}
                width={18}
              />
              <div>
                <p className='text-[24px] font-[700]'>Innovation</p>
                <p className='mt-3 text-[16px] font-light leading-[32px]'>
                  We are constantly seeking new and better ways to improve our
                  recruitment services and stay ahead of industry trends. <br />
                  Respect – We treat everyone with respect, dignity, and
                  empathy, regardless of their background, status, or beliefs.
                </p>
              </div>
            </div>
            <div className='mt-14  flex items-start gap-4'>
              <Image
                src='/assets/svg/mark.svg'
                alt='mark'
                height={18}
                width={18}
              />
              <div>
                <p className='text-[24px] font-[700]'>Collaboration</p>
                <p className='mt-3 text-[16px] font-light leading-[32px]'>
                  We believe that working together as a team with our clients
                  and partners is essential to achieving success.
                  <br />
                  Personalised service – We believe in treating each job seeker
                  and employer as an individual with unique needs and
                  preferences, and providing tailored recruitment solutions
                  accordingly.
                </p>
              </div>
            </div>
            <div className='mt-14  flex items-start gap-4'>
              <Image
                src='/assets/svg/mark.svg'
                alt='mark'
                height={18}
                width={18}
              />
              <div>
                <p className='text-[24px] font-[700]'>Professionalism</p>
                <p className='mt-3 text-[16px] font-light leading-[32px]'>
                  We conduct ourselves with the highest level of
                  professionalism, accountability, and responsibility, and
                  always strive to uphold the reputation of our industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthContent;
