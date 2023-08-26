import React, { useState } from 'react';
import { useRouter } from 'next/router';
import jobs from '../../components/jobData';
import ContactSection from '@/components/landing/ContactSection';

const JobDetailsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    coverLetter: '',
    cv: null as File | null,
  });

  const router = useRouter();
  const { jobId } = router.query; // Retrieve job ID from the URL query params
  const { id } = router.query; // Get the job ID from the URL query

  const job = jobs.find((job: any) => job.id === Number(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      const file = e.target.files?.[0];
      setFormData({
        ...formData,
        cv: file || null,
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Implement your logic to handle form submission (e.g., sending an email)

    // Reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      coverLetter: '',
      cv: null,
    });

    // You can also add a success message or redirect the user to a confirmation page
  };

  return (
    <div>
      {/* Hero Section */}
      <section className='bg-[#F4F7FF] py-16 md:py-20'>
        <div className='container mx-auto text-center'>
          <h1 className='mb-2 text-4xl font-bold'>Job Details</h1>
          <p className='text-lg'>Explore the details of the job.</p>
        </div>
      </section>

      {/* Job Details */}
      <div className='container mx-auto mt-8'>
        <div className='grid md:grid-cols-2'>
          <div>
            <h2 className='mt-8 text-2xl font-semibold'>{job.title}</h2>
            <p className='text-gray-600'>{job.company}</p>
            <p className='text-gray-600'>{job.location}</p>
            <p className='mb-1 mt-4 text-xl font-bold'>Description</p>
            <p className='mb-4 text-gray-800'>{job.description}</p>
            <p className='mb-1 mt-4 text-xl font-bold'>Requirements</p>
            <ul className='list-disc pl-3'>
              {job.requirements.map((requirement, index) => (
                <li className='text-gray-800' key={index}>
                  {requirement}
                </li>
              ))}
            </ul>
            <p className='mb-1 mt-4 text-xl font-bold'>Qualifications</p>
            <ul className='list-disc pl-3'>
              {job.qualifications.map((qualification, index) => (
                <li className='text-gray-800' key={index}>
                  {qualification}
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* Application Form */}
            <div className='container mx-auto mt-8'>
              <h2 className='text-2xl font-semibold'>Apply for this job</h2>
              <form onSubmit={handleFormSubmit}>
                <div className='mt-4'>
                  <label className='block text-gray-700'>Your Name</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='John Doe'
                    className='my-input'
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className='mt-4'>
                  <label className='block text-gray-700'>Email Address</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='you@example.com'
                    className='my-input'
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className='mt-4'>
                  <label className='block text-gray-700'>Phone Number</label>
                  <input
                    type='tel'
                    name='phoneNumber'
                    placeholder='555-555-5555'
                    className='my-input'
                    value={formData.phoneNumber}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className='mt-4'>
                  <label className='block text-gray-700'>Cover Letter</label>
                  <textarea
                    name='coverLetter'
                    placeholder='Write your cover letter here...'
                    className='my-input'
                    value={formData.coverLetter}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>
                <div className='mt-4'>
                  <label className='block text-gray-700'>Upload CV</label>
                  <input
                    type='file'
                    name='cv'
                    accept='.pdf, .doc, .docx'
                    onChange={handleCVUpload}
                    className='my-input'
                  />
                </div>
                <div className='my-8'>
                  <button
                    type='submit'
                    className='rounded-lg bg-ace-blue px-4 py-2 text-white hover:bg-blue-700'
                  >
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#F4F7FF]'>
        <ContactSection />
      </div>
    </div>
  );
};

export default JobDetailsPage;
