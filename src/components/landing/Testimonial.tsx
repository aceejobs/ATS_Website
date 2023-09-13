import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StarIcon } from '@heroicons/react/20/solid';


const testimonials = [
  {
    id: 1,
    stars: 5,
    Title: "Exceptional Service and Job Placement",
      quote: (
        <>
          The team at ACEE Careers truly understands the job market and what candidates like me are on the lookout for. They took the time to assess my skills, interests, and career goals, and then matched me with the perfect job that not only aligns with my aspirations but also offers an attractive compensation package.
          <br /><br />
          What stood out to me was their commitment to transparency and communication. Throughout the entire process, I was kept informed about job openings, interview schedules, and feedback from potential employers. This level of communication made me feel valued and reassured.
        </>
      ),
      name: 'Taiwo Durosinmi-Etti',
    position: 'Brand & Sales Experience',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
  },
  {
    id: 2,
    stars: 5,
    Title: "Excellent Customer Experience",
    quote:
      `Working with the ACEE team was seamless. They got my preferred choice of candidates in time for the opening of my stall. I recommend them to every organization looking to hire the best talents.`,
    position: 'Managing Partner A Jewellers',
    name: "Kunle Fakeye",
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#F4F7FF] py-8 md:py-12">
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
            <div className="flex gap-x-1 text-[#ed2c22] justify-center">
              {Array.from({ length: testimonial.stars }, (_, i) => (
                <StarIcon key={i} className="h-5 w-5 flex-none" aria-hidden="true" />
              ))}
              
            </div>
            <blockquote className="mt-6 md:text-xl leading-8 tracking-tight text-gray-600 text-2xl sm:leading-9">
              <p>{testimonial.quote}</p>
            </blockquote>
          </div>
          <div
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Animation for the image and caption
          >
            <figcaption className="mt-10 flex items-center gap-x-6 mb-12 justify-center">
              <img className="h-12 w-12 rounded-full bg-gray-50" src={testimonial.image} alt="" />
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
  );
};

export default Testimonial;
