import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import jobs from '../../components/jobData';
import ContactSection from '@/components/landing/ContactSection';
import { baseURL } from '../../constant/constants';

import { useFetchId } from '@/hooks/UseFetchId';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobDetailsPage = () => {
  const [data, setData] = useState([]); // Use the specified type
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    cv: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const url = `${baseURL}/jobs/${id}`;
      setLoading(true);
      setError('');

      axios
        .get(url)
        .then((response) => {
          const myData = response.data.data;
          console.log(myData);
          setData(myData); // Set the fetched data
          setLoading(false);
        })
        .catch((error) => {
          setError('An error occurred while fetching data.');
          setLoading(false);
        });
    }
  }, [id]);

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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true); // Start the loading state

    // Create a FormData object to send the form data as multipart/form-data
    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('coverLeter', formData.coverLetter);

    // Check if id is available and is of type string
    // if (id && typeof id === 'string') {
    //   formDataToSend.append('jobId', id);
    // }
    // Conditionally append the cv field if it's not null
    if (formData.cv) {
      formDataToSend.append('cv', formData.cv);
    }

    try {
      // Send a POST request to the application endpoint
      const response = await axios.post(
        `${baseURL}/jobs/apply`,
        formDataToSend
      );

      // Check if the application was successful
      if (response.status === 200) {
        // Reset the form fields after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          coverLetter: '',
          cv: null as File | null,

        });

        // Show a success toast
        toast.success('Application submitted successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        // Show an error toast if the request was not successful
        toast.error('Something went wrong, Please try again later', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error: any) {
      console.log(error.response.data.error);
      // Show an error toast if there was an exception
      toast.error(error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsSubmitting(false); // Stop the loading state after API call
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Job not found</div>;
  }

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
            <h2 className='mt-8 text-2xl font-semibold'>
              {data ? (data as any).title : ''}
            </h2>
            <p className='text-gray-600'>
              Company: {data ? (data as any).company : ''}
            </p>
            <p className='text-gray-600'>
              Location: {data ? (data as any).location : ''}
            </p>
            <p className='text-gray-600'>
              Job Type: {data ? (data as any).jobType : ''}
            </p>
            <p className='text-gray-600'>
              Salary: {data ? (data as any).salary : ''}
            </p>

            <p className='mb-1 mt-4 text-xl font-bold'>Description</p>
            <p className='mb-4 text-gray-800'>
              {data ? (data as any).description : ''}
            </p>
            <p className='mb-1 mt-4 text-xl font-bold'>Requirements</p>
            <ul className='list-disc pl-3'>
              {/* {data.qualifications.map((qualification, index) => ( */}
              <li className='text-gray-800'>
                {data ? (data as any).requirement : ''}
              </li>
              <li className='text-gray-800'>
                {data ? (data as any).experience : ''}
              </li>
              {/* ))} */}
            </ul>
            <p className='mb-1 mt-4 text-xl font-bold'>Responsibility</p>
            <ul className='list-disc pl-3'>
              {/* {data.qualifications.map((qualification, index) => ( */}
              <li className='text-gray-800'>
                {data ? (data as any).responsibility : ''}
              </li>
              {/* ))} */}
            </ul>
            <p className='mb-1 mt-4 text-xl font-bold'>Qualifications</p>
            <ul className='list-disc pl-3'>
              {/* {data.qualifications.map((qualification, index) => ( */}
              <li className='text-gray-800'>
                {data ? (data as any).qualification : ''}
              </li>
              {/* ))} */}
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
                    name='fullName'
                    placeholder='John Doe'
                    className='my-input'
                    value={formData.fullName}
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
                    name='phone'
                    placeholder='555-555-5555'
                    className='my-input'
                    value={formData.phone}
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
                    disabled={isSubmitting} // Disable the button while submitting
                  >
                    {isSubmitting ? 'Loading...' : 'Apply Now'}
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
