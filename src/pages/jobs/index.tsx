import ContactSection from '@/components/landing/ContactSection';
import Link from 'next/link';
import React, { useState } from 'react';
import jobs from '../../components/jobData';

const JobsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const jobsPerPage = 9;

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const newSearchTerm = e.target.value;
    // setSearchTerm(newSearchTerm);
    // setCurrentPage(1);
    // Reset to the first page when searching
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div>
      {/* Hero Section */}
      <section className='bg-[#F4F7FF] py-16 md:py-24'>
        <div className='container mx-auto text-center'>
          <h1 className='mb-2 text-4xl font-bold'>Find Your Dream Job</h1>
          <p className='text-lg'>
            Explore the latest job opportunities in your area.
          </p>
        </div>
      </section>

      {/* Job Search */}
      <div className='container mx-auto mb-4 mt-8 py-10'>
        <input
          type='text'
          placeholder='Search for jobs...'
          value={searchTerm}
          onChange={handleSearch}
          className='w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-400'
        />
      </div>

      {/* Job Listings */}
      <div className='container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
        {currentJobs.map((job: any) => (
          <div
            key={job.id}
            className='rounded-lg bg-[#F4F7FF] p-4 shadow-md transition duration-300 hover:shadow-lg md:p-6'
          >
            <div className="md:h-[75%]">
            <h3 className='text-xl font-semibold'>{job.title}</h3>
            <p className='text-gray-600'>{job.company}</p>
            <p className='text-gray-600'>{job.location}</p>
            <p className='mb-6 mt-2'>
              {job.description.length > 200
                ? `${job.description.substring(0, 75)}...`
                : job.description}
            </p>
            </div>
            
            {/* <p className='mb-6 mt-2'>{job.description}</p> */}
            <Link
              href={`/jobs/${job.id}`}
              className='mt-4 rounded-lg bg-ace-blue px-4 py-2 text-white hover:bg-blue-700'
            >
              Apply Now
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='container mx-auto py-8'>
        <ul className='flex justify-center space-x-4'>
          {currentPage > 1 && (
            <li
              onClick={() => handlePageChange(currentPage - 1)}
              className='cursor-pointer rounded-full bg-blue-200 px-3 py-1 text-blue-600 hover:bg-blue-300'
            >
              Previous
            </li>
          )}
          {pageNumbers.map((page) => (
            <li
              key={page}
              onClick={() => handlePageChange(page)}
              className={`cursor-pointer ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-blue-200'
              } rounded-full px-3 py-1`}
            >
              {page}
            </li>
          ))}
          {currentPage < totalPages && (
            <li
              onClick={() => handlePageChange(currentPage + 1)}
              className='cursor-pointer rounded-full bg-blue-200 px-3 py-1 text-blue-600 hover:bg-blue-300'
            >
              Next
            </li>
          )}
        </ul>
      </div>
      {/* <div className='bg-[#F4F7FF]'>
        <ContactSection />
      </div> */}
    </div>
  );
};

export default JobsPage;
