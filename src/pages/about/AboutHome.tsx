import React from 'react'
import Image from 'next/image';

const AboutHome = () => {
  return (
    <div className="bg-[#F4F7FF]">
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
            <p className='mb-4 text-center text-[34px] font-[800]'>The Story Of Us</p>
            <p className='text-justify leading-[34px]'>
            ACEE RECRUITMENT is a leading recruitment company dedicated to connecting talented, competent job seekers with employers who value their skills and expertise.

            </p>
            <p className='mt-6 text-justify'>
              {' '}
              We're not your run-of-the-mill recruitment company; we're matchmakers of excellence, linking top-tier job seekers with employers who crave their skills.

            </p>

            <p className='mt-6 text-justify'>
        Imagine a masterpiece of talent, brought to life by our skilled recruiters who navigate the intricate notes of the job market.

        </p>
        <p className='mt-6 text-justify'>
        Our purpose? Ensuring each job discovers its perfect match. Whether you're a dream-pursuing job seeker or a company in pursuit of excellence, we possess the know-how and tools to transform ambitions into accomplishments.

        </p>
        <p className='mt-6 text-justify'>
        But here's the twist – we're all about personalization. We're not here to make matches; we're here to create relationships. We dive deep into the hearts of job seekers and employers, fashioning bespoke solutions that fit like a glove.

        </p>
          </div>
        </div>
       
        <p className='mt-6 text-justify'>
        Our reputation? Golden. We're the trusted compass guiding job seekers and employers through the recruitment maze, with a track record that shines like a starlit sky. Whether you're in pursuit of the perfect career or the perfect hire, ACEE RECRUITMENT is the launchpad to your success story.

        </p>
        <p className='mt-6 text-justify'>
        Our future? Brighter than ever. We're on a journey to be the guiding light in recruitment, known for our integrity, excellence, and personalized touch. Fuelled by innovation and customer delight, we're not just raising the bar – we're setting a new standard, one match at a time.

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
      </div>
  )
}

export default AboutHome