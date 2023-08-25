import Image from 'next/image';
import React, { useState } from 'react';

import Button from '@/components/buttons/Button';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div
      className='py-12 lg:py-20 items-center px-6 lg:-top-20 lg:flex lg:px-32 '
      id='contact'
    >
      <div className='lg:w-[49%]'>
        <div className='hidden lg:block'>
          {/* <p className='text-2xl font-bold'>Contact Us</p> */}
          <p className='my-2 font-[700] medium-phone:text-[20px] large-phone:text-[34px]'>
            Get In Touch With Us
          </p>
          <p className='leading-[32px]'>
            We look forward to hearing from you. Feel free to <br /> drop us a
            message or email.
          </p>
        </div>
        <div className='text-center lg:hidden'>
          <p className='my-6 text-[16px]'>Contact Us</p>
          <p className='my-2 text-[28px] font-[700] medium-phone:text-[30px] large-phone:text-[34px]'>
            Get In Touch With Us
          </p>
          <p className='mt-6 leading-[20px]'>
            We look forward to hearing from you. Feel free to drop us a message
            or email.
          </p>
        </div>
        <div className='mt-8'>
          <div className='flex items-center gap-6'>
            <div className='contact-card relative flex h-[75px] w-[75px] items-center justify-center  rounded-[5px]'>
              <Image
                src='/assets/svg/phone.svg'
                alt='phone'
                width={25}
                height={25}
              />
            </div>
            <div>
              <p className='text-[18px] font-[600]'>Phone Number</p>
              <p>08165821749</p>
            </div>
          </div>
          <div className='mt-8 flex items-center gap-6'>
            <div className='contact-card relative flex h-[75px] w-[75px] items-center justify-center  rounded-[5px]'>
              <Image
                src='/assets/svg/mail.svg'
                alt='mail'
                width={25}
                height={25}
              />
            </div>
            <div>
              <p className='text-[18px] font-[600]'>Email Address</p>
              <p>info@aceejobs.com</p>
            </div>
          </div>
          <div className='mt-8 flex items-center gap-6'>
            <div className='contact-card relative flex h-[75px] w-[75px] items-center justify-center  rounded-[5px]'>
              <Image
                src='/assets/svg/location.svg'
                alt='location'
                width={25}
                height={25}
              />
            </div>
            <div>
              <p className='text-[18px] font-[600]'>Office Address</p>
              <p>Mulliner Towers, Alfred Rewane Road, Ikoyi</p>
            </div>
          </div>
        </div>
      </div>
      <form className='contact-form mt-20 p-10 lg:mt-0 lg:w-[49%]'>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Name'
          className='mb-8 h-[50px] w-full rounded-[5px] border border-white bg-transparent px-6 text-white caret-white outline-none placeholder:text-white focus:border-white'
        />
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          placeholder='Email Address'
          className='mb-8 h-[50px] w-full rounded-[5px] border border-white bg-transparent px-6 text-white caret-white outline-none placeholder:text-white focus:border-white'
        />
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type='number'
          placeholder='Mobile Number'
          className='mb-8 h-[50px] w-full rounded-[5px] border border-white bg-transparent px-6 text-white caret-white outline-none placeholder:text-white focus:border-white'
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message'
          className='mb-8 h-[81px] w-full rounded-[5px] border border-white bg-transparent px-6 text-white caret-white outline-none placeholder:text-white focus:border-white'
        />
        <a
          href={`mailto:info@acee-jobs.com?body=${message}?name=${name}?phone={${phone}}`}
          target='_blank'
        ></a>
        <Button
          type='submit'
          className='h-[60px] w-full bg-white text-ace-blue'
        >
          <span>Send Message</span>
        </Button>
      </form>
    </div>
  );
};

export default ContactSection;
