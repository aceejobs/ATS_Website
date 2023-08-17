import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '@/components/buttons/Button';

const Modal = ({ toggleModal }: { toggleModal: () => void }) => {
  const [firstName, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [role, setRole] = useState('');
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0, 0.4)',
      }}
      className='fixed inset-0  z-[9999999] flex items-center justify-center p-6'
    >
      <div
        style={{
          zIndex: '1000000',
        }}
        className=' w-full rounded-[5px] bg-white p-10 lg:w-[595px]'
      >
        <div className='mb-6 flex items-center justify-between'>
          <p className=' text-center text-[20px] font-bold text-ace-blue md:text-[24px] '>
            Get Started with ACEE
          </p>
          <AiOutlineClose className='cursor-pointer' onClick={toggleModal} />
        </div>

        <form className=''>
          <input
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            placeholder='First Name'
            className='mb-4 h-[50px] w-full rounded-[5px] border border-ace-light-blue bg-transparent px-6 text-ace-blue caret-ace-blue outline-none placeholder:text-ace-blue '
          />
          <input
            value={Lastname}
            required
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            placeholder='Last Name'
            className='mb-4 h-[50px] w-full rounded-[5px] border border-ace-light-blue bg-transparent px-6 text-ace-blue caret-ace-blue outline-none placeholder:text-ace-blue '
          />
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='Email Address'
            className='mb-4 h-[50px] w-full rounded-[5px] border border-ace-light-blue bg-transparent px-6 text-ace-blue caret-ace-blue outline-none placeholder:text-ace-blue '
          />
          <input
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
            type='number'
            placeholder='Mobile Number'
            className='mb-4 h-[50px] w-full rounded-[5px] border border-ace-light-blue bg-transparent px-6 text-ace-blue caret-ace-blue outline-none placeholder:text-ace-blue '
          />
          {/* <select
            className='mb-4 h-[50px] w-full rounded-[5px] border border-ace-light-blue bg-transparent px-6 text-ace-blue caret-ace-blue outline-none placeholder:text-ace-blue '
            placeholder='Role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Chef</option>
            <option>Barber</option>
            <option>GateMan</option>
          </select> */}
          {/* <input
            value={company}
            required
            onChange={(e) => setCompany(e.target.value)}
            type='text'
            placeholder='Company Name'
            className='mb-4 h-[50px] w-full rounded-[5px] border border-ace-light-blue bg-transparent px-6 text-ace-blue caret-ace-blue outline-none placeholder:text-ace-blue '
          /> */}

          <Button type='submit' className='h-[60px] w-full '>
            <span>Sign Up</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
