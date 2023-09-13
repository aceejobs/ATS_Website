import React from 'react'
import Image from 'next/image';

const AboutHome = () => {
  return (
    <>
    <div className="bg-[#F4F7FF]">
    <div className="container py-12 md:py-16">

    <div className='md:w-1/2 mx-auto'>
            <p className='mb-4 text-center text-[34px] font-[800] py-4' 
           data-aos='fade-up'
            >The Story Of Us</p>
            <p className='text-center text-lg text-gray-600 leading-[34px]'>
            ACEE RECRUITMENT is a leading recruitment company dedicated to connecting talented, competent job seekers with employers who value their skills and expertise.

            </p>
           
          </div>
      
          <div className='bg-[#F15D55] mt-12 rounded-xl'>
        <div className="container py-8 md:py-12 text-white">
        <p className='mb-4 text-[34px] font-[800] py-4'
           data-aos='fade-down'
        >More about Us</p>

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
        <p className='mt-6 text-justify'>
        Our reputation? Golden. We're the trusted compass guiding job seekers and employers through the recruitment maze, with a track record that shines like a starlit sky. Whether you're in pursuit of the perfect career or the perfect hire, ACEE RECRUITMENT is the launchpad to your success story.

        </p>
        <p className='mt-6 text-justify'>
        Our future? Brighter than ever. We're on a journey to be the guiding light in recruitment, known for our integrity, excellence, and personalized touch. Fuelled by innovation and customer delight, we're not just raising the bar – we're setting a new standard, one match at a time.

        </p>
        </div>
</div>

      </div>
      </div>
     
      </>
  )
}

export default AboutHome