import React from 'react'
import Image from 'next/image';

const Brands = () => {
  return (
    <div className="container pt-8">
    <div className="md:flex items-center gap-6">
      <div className="md:w-1/3">
        <p className="text-4xl font-bold">Our clients</p>
      </div>
      <div className="md:w-2/3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
      {/* <div>
         <Image
          src='/assets/svg/A.svg'
          alt='image-1'
          width={200}
          height={100}

        />
         </div> */}
           <div className='relative aspect-w-2 aspect-h-1'>
         <Image
          src='/assets/svg/12.jpeg'
          alt='image-1'
          width={200}
          height={100}

        />
         </div>
         <div className='relative aspect-w-2 aspect-h-1'>
         <Image
          src='/assets/svg/landmark.jpeg'
          alt='image-1'
          width={200}
          height={100}

        />
         </div>
         
       
         <div className='relative aspect-w-2 aspect-h-1'>
         <Image
          src='/assets/svg/goodbeach.jpeg' 
          alt='image-1'
          width={200}
          height={100}
          className="object-cover"

        />
         </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Brands