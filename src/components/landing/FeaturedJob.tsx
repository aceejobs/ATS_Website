import React from 'react'
import Link from 'next/link';
import jobs from '../../components/jobData';
import Image from 'next/image';

const FeaturedJob = () => {

  const filterJob = jobs.slice(0,8)
  return (
    <div className='bg-[#0017b7]'>
      <div className="container py-12 md:py-20">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold text-white">Featured Jobs</p>
          <Link href="/jobs" className="text-white">View All Jobs</Link>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 mt-8'>
        {filterJob.map((job: any) => (
          <div
            key={job.id}
            className='rounded-xl bg-[#FFFFFF0F] p-2 shadow-md transition duration-300 hover:shadow-lg md:p-6 text-white'
          >
            <Image
              src='/assets/svg/phon.jpg'
              alt='logo'
              width={75}
              height={75}
              className='object-contain rounded-2xl'
            />
            <h3 className='text-xl font-semibold mt-4'>{job.title}</h3>
            <p className='text-gray-300 text-sm'>{job.company}</p>
            <p className='text-gray-300 mb-6 text-sm'>{job.location}</p>
            
            {/* <p className='mb-6 mt-2'>{job.description}</p> */}
            <Link
              href={`/jobs/${job.id}`}
              className='mt-6 rounded-lg font-semibold text-sm px-2 py-2 text-white hover:bg-blue-700'
            >
              Apply Now
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedJob