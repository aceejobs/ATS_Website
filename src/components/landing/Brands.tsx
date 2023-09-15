import React from 'react'
import Image from 'next/image';

const Brands = () => {
  return (
    <div className="container pt-8">
    <div className="md:flex items-center gap-6">
      <div className="md:w-1/3">
        <p className="text-2xl font-bold">We are trusted by our happy clients</p>
      </div>
      <div className="md:w-2/3">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
      <div>
         <Image
          src='/assets/svg/A.svg'
          alt='image-1'
          width={200}
          height={100}

        />
         </div>
         <div>
         <Image
          src='/assets/svg/landmark.svg'
          alt='image-1'
          width={200}
          height={100}

        />
         </div>
         
         <div>
         <Image
          src='/assets/svg/12.svg'
          alt='image-1'
          width={200}
          height={100}

        />
         </div>
         <div>
         <Image
          src='/assets/svg/beach.svg' 
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