import React from 'react';

const FourthContent = () => {
  return (
    <div>
      <div className='relative -top-20 hidden lg:block'>
        <div className='fourth-big ml-28 flex items-center justify-between lg:gap-10 lg:px-10 xl:p-16'>
          <p className='text-[34px] font-bold text-white'>Vision</p>
          <div className='w-[710px] text-justify text-white'>
            <p>
              Our vision is to be the most trusted and respected recruitment
              company in the industry, known for our commitment to excellence,
              integrity, and personalized service. We aim to be the go-to
              resource for job seekers and employers alike, helping them achieve
              their goals and drive their businesses forward.
            </p>
            <p className='mt-10'>
              {' '}
              Through innovation, collaboration, and a relentless focus on
              customer satisfaction, we will continue to lead the way in the
              recruitment industry and make a positive impact on the lives ofthe
              people we serve.
            </p>
          </div>
        </div>

        <div className='fourth-big mt-10 ml-64 flex rotate-180 items-center justify-between lg:gap-10 lg:px-10 xl:p-16 '>
          <p className='-rotate-180 text-[34px] font-bold text-white'>
            Mission
          </p>
          <div className='w-[710px] -rotate-180 text-justify text-white'>
            <p>
              At ACEE RECRUITMENT, our mission is to empower talented
              individuals to achieve their full potential by connecting them
              with employers who value their skills and expertise. We are
              committed to delivering personalized recruitment solutions that
              meet the unique needs of each job seeker and employer we work
              with, and to providing exceptional customer service that exceeds
              expectations.
            </p>
            <p className='mt-10'>
              We are committed to delivering personalized recruitment solutions
              that meet the unique needs of each job seeker and employer we work
              with, and to providing exceptional customer service that exceeds
              expectations.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-16 px-6 lg:hidden'>
        <div className='fourth-mobile p-8 '>
          <p className='mt-4 mb-6 text-center text-[34px] font-bold text-white'>
            Vision
          </p>
          <div className='text-justify  leading-[28px] text-white medium-phone:text-[12px] large-phone:text-[16px]'>
            <p>
              Our vision is to be the most trusted and respected recruitment
              company in the industry, known for our commitment to excellence,
              integrity, and personalized service. We aim to be the go-to
              resource for job seekers and employers alike, helping them achieve
              their goals and drive their businesses forward.
            </p>
            <p className='mt-10 medium-phone:mt-4'>
              {' '}
              Through innovation, collaboration, and a relentless focus on
              customer satisfaction, we will continue to lead the way in the
              recruitment industry and make a positive impact on the lives ofthe
              people we serve.
            </p>
          </div>
        </div>
        <div className='fourth-mobile mt-10 rotate-180 p-8'>
          <div className='rotate-180 text-justify  leading-[28px] text-white medium-phone:text-[12px] large-phone:text-[16px]'>
            <p className='-rotate-360 mb-6 text-center text-[34px] font-bold  text-white'>
              Mission
            </p>

            <p>
              At ACEE RECRUITMENT, our mission is to empower talented
              individuals to achieve their full potential by connecting them
              with employers who value their skills and expertise.
            </p>
            <p className='mt-10 medium-phone:mt-4'>
              {' '}
              We are committed to delivering personalized recruitment solutions
              that meet the unique needs of each job seeker and employer we work
              with, and to providing exceptional customer service that exceeds
              expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthContent;
