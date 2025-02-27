'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const images = ['/image.png', '/image.png', '/image.png'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '15%', // Peeking effect
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '5%', // Smaller peeking effect on tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '5%', // Reduce peeking effect on mobile
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0%', // Full-width on very small screens
        },
      },
    ],
  };

  return (
    <section className='relative w-full flex flex-col items-center justify-center pt-7'>
      {/* Carousel */}
      <div className='w-full h-auto flex justify-center items-center mb-4 px-4 sm:px-0'>
        <div className='w-full max-w-6xl'>
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className='px-2'>
                <Image
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  width={1200}
                  height={600}
                  className='object-contain rounded-lg shadow-lg w-full h-auto'
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Heading and Content */}
      <div className='flex flex-col items-center px-4 text-center lg:px-0 mt-7'>
        <h1 className='text-3xl lg:text-4xl font-bold text-gray-900 leading-snug'>
          Where Every Dancer Finds Home
        </h1>
        <p className='mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl'>
          Discover a variety of dance workshops for every style, level, and
          preference. Whether you&apos;re into hip-hop, salsa, classical, or
          freestyle, our curated listings make it easy to find something
          you&apos;ll love.
        </p>
        <button
          className='mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-md transition'
          onClick={() => router.push('/search')}
        >
          Register a Class
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
