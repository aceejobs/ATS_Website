import React from 'react'
import Image from 'next/image';

const values = [
  {
    name: 'Integrity',
    description:
      ' We are committed to acting with honesty, transparency, and ethical behaviour in all our interactions with job seekers and employers.',
  },
  {
    name: 'Excellence',
    description:
      `We strive to deliver the highest quality recruitment solutions
      that exceed expectations and help job seekers and employers
      achieve their goals.`,
  },
  {
    name: 'Collaboration',
    description:
      ` We believe that working together as a team with our clients and
      partners is essential to achieving success.`,
  },
  {
    name: 'Innovation',
    description:
      `We are constantly seeking new and better ways to improve our
      recruitment services and stay ahead of industry trends. `,
  },
  {
    name: 'Professionalism',
    description:
      `We conduct ourselves with the highest level of professionalism,
      accountability, and responsibility, and always strive to uphold
      the reputation of our industry.`,
  },
  {
    name: 'Personalised service ',
    description:
      `We believe in treating each job seeker and employer as
      an individual with unique needs and preferences, and providing
      tailored recruitment solutions accordingly.`,
  },
]
const CompanyValues = () => {
  return (
    <div className='bg-[#F4F7FF] py-8'>
      {/* Content section */}
      <div className="container">
          <div className=" md:py-6 py-6 mt-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Vision</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="">
                <p className="lg:text-lg text-lg leading-8 text-gray-600">
                Our vision is to be the most trusted and respected recruitment
              company in the industry, known for our commitment to excellence,
              integrity, and personalized service. We aim to be the go-to
              resource for job seekers and employers alike, helping them achieve
              their goals and drive their businesses forward.
                </p>
                <div className="mt-10 lg:text-lg text-lg leading-7 text-gray-600">
                  <p>
                  Through innovation, collaboration, and a relentless focus on
              customer satisfaction, we will continue to lead the way in the
              recruitment industry and make a positive impact on the lives ofthe
              people we serve.
                  </p>
                  
                </div>
              </div>
             
            </div>
          </div>

          <div className=" md:py-6 py-6 mt-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="">
                <p className="lg:text-lg text-lg leading-8 text-gray-600">
                At ACEE RECRUITMENT, our mission is to empower talented
              individuals to achieve their full potential by connecting them
              with employers who value their skills and expertise. We are
              committed to delivering personalized recruitment solutions that
              meet the unique needs of each job seeker and employer we work
              with, and to providing exceptional customer service that exceeds
              expectations.
                </p>
                <div className="mt-10 lg:text-lg text-lg leading-7 text-gray-600">
                  <p>
                  We are committed to delivering personalized recruitment solutions
              that meet the unique needs of each job seeker and employer we work
              with, and to providing exceptional customer service that exceeds
              expectations.
                  </p>
                 
                </div>
              </div>
             
            </div>
          </div>

        {/* Image section */}
        <div className="mt-10 sm:mt-12">
        {/* <Image
                src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
                alt='image-1'
                width={100}
                height={286}
                className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
              /> */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-10 py-6">
          <div className="mx-auto max-w-2xl lg:mx-0 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
            
          </div>
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-lg text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        </div>

    </div>
  )
}

export default CompanyValues