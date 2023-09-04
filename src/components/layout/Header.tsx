// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import Button from '@/components/buttons/Button';
// import Modal from '@/components/modal/Modal';

// const NavBar = () => {
//   const router = useRouter(); // Access the router object
//   const [showModal, setShowModal] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false); // State to control mobile menu visibility
//   const [isScrolled, setIsScrolled] = useState(false); // State to track if the user has scrolled

//   const toggleModal = () => {
//     setShowModal((prev) => !prev);
//   };

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setShowMobileMenu((prev) => !prev);
//   };

//   // Define a function to determine if a link is active
//   const isLinkActive = (href: string) => {
//     return router.pathname === href
//       ? 'text-gray-900 bg-[#F4F7FF] rounded-lg py-2 px-4 text-base font-bold'
//       : '';
//   };

//   // Function to handle scrolling
//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll); // Add scroll event listener
//     return () => {
//       window.removeEventListener('scroll', handleScroll); // Remove event listener on unmount
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         className={`${
//           isScrolled ? 'fixed top-0 left-0 right-0 bg-white shadow' : ''
//         } flex items-center justify-between px-6 pt-4 lg:px-32 text-sm transition-all duration-300 z-[15000]`}
//       >
//         <Link href='/'>
//           <div className='relative flex h-[59px] w-[116px] items-center justify-center '>
//             <Image
//               src='/assets/svg/logo-4-mobile.svg'
//               alt='logo'
//               fill={true}
//               className='object-contain '
//             />
//           </div>
//         </Link>

//         <div className='lg:hidden'>
//           <button
//             onClick={toggleMobileMenu}
//             className='focus:outline-none'
//             aria-label='Toggle Mobile Menu'
//           >
//             <Image
//               src='/assets/svg/menu.svg'
//               width={24}
//               height={16}
//               alt=''
//             />
//           </button>
//         </div>
//       </div>

//       {/* Add padding to content container when mobile menu is toggled on mobile */}
//       <div
//         className={`${
//           showMobileMenu ? 'pt-96' : '' // Add padding when mobile menu is toggled
//         }`}
//       >
//         {showMobileMenu && (
//           <div className='fixed inset-0 z-[999]'>
//             <div className='flex flex-col justify-center px-8 gap-8 py-12 bg-white shadow z-[1000]'>
//               {/* Close button to close the mobile menu */}
//               <button
//                 onClick={toggleMobileMenu}
//                 className='self-end text-xl leading-none cursor-pointer focus:outline-none'
//               >
//                 &times;
//               </button>
//               <Link href='/'>
//                 <p
//                   onClick={toggleMobileMenu}
//                   className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/')}`}
//                 >
//                   Home
//                 </p>
//               </Link>
//               <Link href='/about'>
//                 <p
//                   onClick={toggleMobileMenu}
//                   className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/about')}`}
//                 >
//                   About Us
//                 </p>
//               </Link>
//               <Link href='/jobs'>
//                 <p
//                   onClick={toggleMobileMenu}
//                   className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/jobs')}`}
//                 >
//                   Jobs
//                 </p>
//               </Link>
//               <Link href='/contact'>
//                 <p
//                   onClick={toggleMobileMenu}
//                   className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/contact')}`}
//                 >
//                   Contact Us
//                 </p>
//               </Link>
//               <Link href='/jobs'>
//                 <Button className='h-[40px] w-[123px] rounded-[6px]'>
//                   Get Started
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         )}
//         </div>

//             {/* Desktop Menu */}
//             <div className='hidden items-center justify-between gap-8 md:gap-10 text-ace-blue lg:flex '>
//           <Link href='/'>
//             <p className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/')}`}>Home</p>
//           </Link>
//           <Link href='/about'>
//             <p className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/about')}`}> About Us</p>
//           </Link>
//           <Link href='/jobs'>
//             <p className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/jobs')}`}> Jobs</p>
//           </Link>
//           <Link href='/contact'>
//             <p className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/contact')}`}> Contact Us</p>
//           </Link>
//         </div>
//         <Link href='/jobs' className='hidden md:block'>
//           <Button className='h-[40px] w-[123px] rounded-[6px]'>
//             Get Started
//           </Button>
//         </Link>

        

        
      

//       {showModal && <Modal toggleModal={toggleModal} />}
//     </div>
//   );
// };

// export default NavBar;


import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';

const NavBar = () => {
  const router = useRouter(); // Access the router object
  const [showModal, setShowModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State to control mobile menu visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the user has scrolled

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  // Define a function to determine if a link is active
  const isLinkActive = (href: string) => {
    return router.pathname === href
      ? 'border-b-2 rounded-none border-[#0017b7] rounded-lg py-2 px-4 text-base font-bold'
      : '';
  };

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove event listener on unmount
    };
  }, []);

  return (
    <div>
      <div
        className={`${
          isScrolled ? 'fixed top-0 left-0 right-0 bg-white shadow' : ''
        } ${showMobileMenu ? 'pt-0' : 'pt-4'} flex items-center justify-between px-6 lg:px-32 text-sm transition-all duration-300 z-[1000] py-2 bg-white`}
      >
        <Link href='/'>
          <div className='relative flex h-[59px] w-[116px] items-center justify-center '>
            <Image
              src='/assets/svg/logo-4-mobile.svg'
              alt='logo'
              fill={true}
              className='object-contain '
            />
          </div>
        </Link>

        <div className='lg:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='focus:outline-none'
            aria-label='Toggle Mobile Menu'
          >
            <Image
              src='/assets/svg/menu.svg'
              width={24}
              height={16}
              alt=''
            />
          </button>
        </div>

        <div
        className={`${
          showMobileMenu ? 'pt-96' : '' // Add padding when mobile menu is toggled
        }`}
      >
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className='fixed inset-0 z-[999]'>
            <div className='flex flex-col justify-center px-8 gap-8 py-12 bg-white shadow z-[999]'>
              {/* Close button to close the mobile menu */}
              <button
                onClick={toggleMobileMenu}
                className='self-end text-xl leading-none cursor-pointer focus:outline-none'
              >
                &times;
              </button>
              <Link href='/'>
                <p
                  onClick={toggleMobileMenu}
                  className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive(
                    '/'
                  )}`}
                >
                  Home
                </p>
              </Link>
              <Link href='/about'>
                <p
                  onClick={toggleMobileMenu}
                  className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive(
                    '/about'
                  )}`}
                >
                  About Us
                </p>
              </Link>
              <Link href='/jobs'>
                <p
                  onClick={toggleMobileMenu}
                  className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive(
                    '/jobs'
                  )}`}
                >
                  Jobs
                </p>
              </Link>
              <Link href='/contact'>
                <p
                  onClick={toggleMobileMenu}
                  className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive(
                    '/contact'
                  )}`}
                >
                  Contact Us
                </p>
              </Link>
              <Link href='/blog'>
                <Button className='h-[40px] w-[123px] rounded-[6px]'>
                  Blog
                </Button>
              </Link>
            </div>
          </div>
        )}
        </div>

        {/* Desktop Menu */}
        <div className='hidden items-center justify-between gap-8 md:gap-10 text-ace-blue lg:flex '>
          <Link href='/'>
            <p className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/')}`}>Home</p>
          </Link>
          <Link href='/about'>
            <p className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/about')}`}> About Us</p>
          </Link>
          <Link href='/jobs'>
            <p className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/jobs')}`}> Jobs</p>
          </Link>
          <Link href='/contact'>
            <p className={`cursor-pointer text-base font-semibold text-[#231459] ${isLinkActive('/contact')}`}> Contact Us</p>
          </Link>
        </div>
        <Link href='/blog' className='hidden md:block'>
          <Button className='h-[40px] w-[123px] rounded-[6px]'>
            Blog
          </Button>
        </Link>
      </div>
      {showModal && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default NavBar;

