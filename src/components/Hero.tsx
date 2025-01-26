'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const images = [
    '/image.png', // Replace with your image paths
    '/image.png',
    '/image.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%', // Default for larger screens
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center mt-0 lg:mt-0">
      {/* Carousel */}
      <div className="w-full lg:w-full h-2/5 lg:h-[60vh] flex justify-center items-center mb-2 pt-0 lg:pt-0"> {/* Reduced mb-4 to mb-2 */}
        <div className="w-full max-w-4xl">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="px-2">
                <Image
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  width={1200}
                  height={600}
                  className="object-cover rounded-lg shadow-lg"
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Heading and Content */}
      <div className="flex flex-col items-center px-4 text-center lg:px-0 mt-0"> {/* Reduced mt-2 to mt-0 */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
          Where Every Dancer Finds Home
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-2xl">
          Discover a variety of dance workshops for every style, level, and preference. Whether you&apos;re into hip-hop, salsa, classical, or freestyle, our curated listings make it easy to find something you&apos;ll love.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-md transition">
          Register a Class
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
