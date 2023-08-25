import React from 'react'
import Image from 'next/image';

const AboutHome = () => {
  return (
    <div className="container py-12">
      <section className='hidden lg:block'>
        <div className='flex items-center justify-between'>
          <div className='relative h-[576px] w-[48%]'>
            <Image
              src='assets/svg/about.svg'
              alt=''
              fill={true}
              className='object-contain'
            />
          </div>
          <div className='w-[48%]'>
            <p className='mb-4 text-center text-[34px] font-[800]'>About Us</p>
            <p className='text-justify leading-[34px]'>
              ACEE RECRUITMENT is a leading recruitment company dedicated to
              connecting talented, competent job seekers with employers who
              value their skills and expertise. Our team of experienced
              recruiters has a deep understanding of the job market and is
              committed to helping both job seekers and employers achieve their
              goals.
            </p>
            <p className='mt-10 text-justify leading-[34px]'>
              {' '}
              At ACEE RECRUITMENT, we believe that every person deserves a job
              that matches their skills and interests, and every company
              deserves employees who can drive their business forward. That's
              why we work tirelessly to find the perfect match for each and
              every job opening we handle. Whether you're a job seeker looking
              for your dream job or an employer looking for the perfect
              candidate, we have the expertise and resources to help you
              succeed.
            </p>
          </div>
        </div>
        <p className='mt-10 text-justify leading-[34px]'>
          We pride ourselves on our personalized approach to recruitment. We
          take the time to understand the unique needs and goals of each job
          seeker and employer we work with, and we tailor our services to meet
          those needs.
        </p>
        <p className='mt-10 text-justify leading-[34px]'>
          Our commitment to excellence and customer satisfaction has earned us a
          reputation as one of the most trusted and reliable recruitment
          companies in the industry. Whether you're a job seeker or an employer,
          you can count on ACEE RECRUITMENT to help you achieve your goals and
          reach your full potential.
        </p>
      </section>
      <section className='lg:hidden'>
        <p className='mb-4 text-center text-[34px] font-[800]'>About Us</p>

        <div className='relative h-[256px] w-full'>
          <Image
            src='assets/svg/about-small.svg'
            alt=''
            fill={true}
            className='object-contain'
          />
        </div>
        <div className='px-2'>
          <p className=' mt-10 text-justify leading-[20px]'>
            ACEE RECRUITMENT is a leading recruitment company dedicated to
            connecting talented, competent job seekers with employers who value
            their skills and expertise. Our team of experienced recruiters has a
            deep understanding of the job market and is committed to helping
            both job seekers and employers achieve their goals.
          </p>
          <p className='mt-6 text-justify leading-[20px]'>
            {' '}
            At ACEE RECRUITMENT, we believe that every person deserves a job
            that matches their skills and interests, and every company deserves
            employees who can drive their business forward. That's why we work
            tirelessly to find the perfect match for each and every job opening
            we handle. Whether you're a job seeker looking for your dream job or
            an employer looking for the perfect candidate, we have the expertise
            and resources to help you succeed.
          </p>
          <p className='mt-6 text-justify leading-[20px]'>
            We pride ourselves on our personalized approach to recruitment. We
            take the time to understand the unique needs and goals of each job
            seeker and employer we work with, and we tailor our services to meet
            those needs.
          </p>
          <p className='mt-6 text-justify leading-[20px]'>
            Our commitment to excellence and customer satisfaction has earned us
            a reputation as one of the most trusted and reliable recruitment
            companies in the industry. Whether you're a job seeker or an
            employer, you can count on ACEE RECRUITMENT to help you achieve your
            goals and reach your full potential.
          </p>
        </div>
      </section>

      </div>
  )
}

export default AboutHome