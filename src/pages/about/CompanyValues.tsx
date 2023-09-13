import React from 'react'
import Image from 'next/image';
import groupImg from "../../../public/assets/svg/group1.jpeg"
const values = [
  {
    name: 'Integrity',
    description:
      ' Integrity is our steadfast companion. We pledge to journey forward with unwavering honesty, an unclouded transparency, and a moral compass guiding every interaction with job seekers and employers.',
  },
  {
    name: 'Excellence',
    description:
      `Our quest is one of relentless excellence, where we sculpt recruitment solutions that not only meet but surpass expectations. With every endeavor, we're artisans of achievement, crafting pathways for job seekers and employers to ascend their goals' summits.`,
  },
  {
    name: 'Collaboration',
    description:
      ` We hold the belief that success is a symphony composed through collaborative efforts. Like skilled conductors, we orchestrate teamwork with our clients and partners, recognizing that it's the harmonious blend of talents that sets the stage for achievement.`,
  },
  {
    name: 'Innovation',
    description:
      `Our spirit thrives on innovation, an unwavering drive to explore uncharted territories and redefine the limits of recruitment. Like pioneers of progress, we venture into the unknown, seeking to sculpt superior versions of our services and ride the crest of industry trends. `,
  },
  {
    name: 'Professionalism',
    description:
      `Our standard is one of impeccable professionalism, where accountability and responsibility are our unwavering companions. We stand as sentinels of our industry's reputation, ensuring that every step we take upholds the dignity it deserves.`,
  },
  {
    name: 'Personalised service ',
    description:
      `We champion the art of personalization, recognizing the distinct essence within every job seeker and employer. With each interaction, we craft custom-tailored recruitment solutions, a testament to our belief in celebrating individuality and catering to unique aspirations and preferences.`,
  },
]
const CompanyValues = () => {
  return (
    <>
    <div className='bg-[#FFF] py-8'>
      {/* Content section */}
      <div className="container">
          <div className=" md:py-6 py-6 mt-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
           data-aos='fade-right'
            >Our North Star</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="">
                <p className="lg:text-lg text-lg leading-8 text-gray-600">
                At ACEE RECRUITMENT, we embark on a journey to unlock the boundless potential of skilled individuals. We forge connections with visionary employers who recognize and honor their talents. 

                </p>
                <div className="mt-10 lg:text-lg text-lg leading-7 text-gray-600">
                  <p>
                  Our dedication lies in crafting tailor-made recruitment marvels that cater to the distinctive desires of every job seeker and employer we embrace. Moreover, our commitment extends to delivering unparalleled customer experiences that transcend the ordinary.

                  </p>
                  
                </div>
              </div>
             
            </div>
          </div>

          <div className=" md:py-6 py-6 mt-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
           data-aos='fade-left'
          
            >Our Mission</h2>
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
          
          <Image
                src='/assets/svg/group1.jpeg'
                alt='image-1'
                // layout='contain'
                width={780}
                height={600}
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"

              />
        </div>

        

        </div>

    </div>
    {/* Values section */}
    <div className="mt-10 py-6 bg-[#F4F7FF] md:py-16 ">
      <div className="container">
      <div className="mx-auto max-w-2xl lg:mx-0 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
           data-aos='fade-down'
    
            >Our Ethos</h2>
            
          </div>
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.name}  data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
                <dt className="font-semibold text-lg text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
      </div>
         
        </div>
      </>
  )
}

export default CompanyValues