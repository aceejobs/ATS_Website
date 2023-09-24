import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StarIcon } from '@heroicons/react/20/solid';
import pic1 from "../../../public/assets/svg/test1.png"
import pic2 from "../../../public/assets/svg/test2.png"
// import { publicUrl } from '../../../next.config'; 
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    stars: 5,
    Title: "Exceptional Service and Job Placement",
      quote:
      `
      The team at ACEE Careers truly understands the job market and what candidates like me are on the lookout for. They took the time to assess my skills, interests, and career goals, and then matched me with the perfect job that not only aligns with my aspirations but also offers an attractive compensation package.
      `  ,
      name: 'Taiwo Durosinmi-Etti',
    position: 'Brand & Sales Experience',
    image: pic1,
  },
  {
    id: 2,
    stars: 5,
    Title: "Excellent Customer Experience",
    quote:
      `Working with the ACEE team was seamless. They got my preferred choice of candidates in time for the opening of my stall. I recommend them to every organization looking to hire the best talents.`,
    position: 'Managing Partner A Jewellers',
    name: "Kunle Fakeye",
    image:pic2,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#F4F7FF] py-8 md:py-12">
      <div className="container">
    <p className="text-2xl font-semibold mb-6 mt-2 text-center">Testimonials</p>

    <Carousel showThumbs={false}>
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className="mx-auto max-w-2xl mt-10"
        >
          <div
            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} // Animation for the entire testimonial block
          >
            <p className="sr-only">{testimonial.stars} out of 5 stars</p>
            <div className="flex gap-x-1 text-[#ED1A25] justify-center">
              {Array.from({ length: testimonial.stars }, (_, i) => (
                <StarIcon key={i} className="h-5 w-5 flex-none" aria-hidden="true" />
              ))}
              
            </div>
            <blockquote className="mt-6 md:text-xl text-lg leading-8 tracking-tight text-gray-600  sm:leading-9">
              <p>{testimonial.quote}</p>
            </blockquote>
          </div>
          <div
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Animation for the image and caption
          >
            <figcaption className="mt-10 flex items-center gap-x-6 mb-12 justify-center">
              
            <Image
              src={testimonial.image}
              alt='logo'
              width={75}
              height={75}
              className='h-16 w-16 rounded-full bg-gray-50'
            />
              {/* <img className="h-12 w-12 rounded-full bg-gray-50" src={publicUrl(testimonial.image)} alt="" /> */}
              <div className="text-sm leading-6">
                <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                <p className="mt-0.5 text-gray-600">{testimonial.position}</p>
              </div>
            </figcaption>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
  </div>
  );
};

export default Testimonial;
