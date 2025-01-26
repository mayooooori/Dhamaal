'use client'
import React, { useState } from 'react';

interface Review {
  id: number;
  message: string;
  name: string;
  title: string;
}

const reviews: Review[] = [
  {
    id: 1,
    message:
      'Dhamaal made it so easy to find and book the perfect dance workshop. The instructors were top-notch, and I learned so much while having the best time. Highly recommend to all dance enthusiasts!',
    name: 'Riya Sharma',
    title: 'Dance Aspirant',
  },
  {
    id: 2,
    message:
      'An amazing platform for dancers! I found the perfect workshop to improve my skills. The classes are professional and so enjoyable.',
    name: 'Rahul Verma',
    title: 'Professional Dancer',
  },
  {
    id: 3,
    message:
      'Truly a game-changer for dance lovers. The workshops are diverse and cater to all levels. I had a wonderful experience!',
    name: 'Priya Mehta',
    title: 'Dance Enthusiast',
  },
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#3FA1DE] py-16 px-4 relative">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center shadow-md rounded-full border border-black md:block hidden"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center shadow-md rounded-full border border-black md:block hidden"
      >
        →
      </button>

      {/* Content Wrapper */}
      <div className="max-w-3xl mx-auto text-center">
        {/* Review Message */}
        <p className="text-lg sm:text-xl md:text-2xl italic font-light leading-relaxed">
          &quot;{reviews[currentIndex].message}&quot;
        </p>

        {/* Reviewer Info */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">{reviews[currentIndex].name}</h3>
          <p className="text-sm">{reviews[currentIndex].title}</p>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
