import Image from 'next/image';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className='bg-white py-3'>
      <div className=' flex items-center justify-between px-6 pt-4 lg:px-32'>
        <div className='relative    flex h-[59px] w-[116px] items-center justify-center '>
          <Image
            src='/assets/svg/logo-4-mobile.svg'
            alt='logo'
            fill={true}
            className='object-contain '
          />
        </div>
        <Image
          src='/assets/svg/menu.svg'
          className='lg:hidden'
          width={24}
          height={16}
          alt=''
        />
        <div className='hidden items-center gap-8 text-ace-blue lg:flex '>
          <Link to='about' smooth={true} duration={1000}>
            <p className='cursor-pointer text-[16px] font-[700]'> About Us</p>
          </Link>
          <Link to='services' smooth={true} duration={1000}>
            <p className='cursor-pointer text-[16px] font-[700]'> Services</p>
          </Link>
          <Link to="blog">
            <Button className='h-[40px] w-[123px] rounded-[6px]'>
              Blog
            </Button>
          </Link>
        </div>
      </div>
      {showModal && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default NavBar;
