'use client'
import React, { useState } from 'react';

interface Review {
  id: number;
  message: string;
  name: string;
  title: string;
  rating: number; // Add a rating property for the stars
}

const reviews: Review[] = [
  {
    id: 1,
    message:
      'Dhamaal made it so easy to find and book the perfect dance workshop. The instructors were top-notch, and I learned so much while having the best time. Highly recommend to all dance enthusiasts!',
    name: 'Riya Sharma',
    title: 'Dance Aspirant',
    rating: 5, // Example rating
  },
  {
    id: 2,
    message:
      'An amazing platform for dancers! I found the perfect workshop to improve my skills. The classes are professional and so enjoyable.',
    name: 'Rahul Verma',
    title: 'Professional Dancer',
    rating: 4, // Example rating
  },
  {
    id: 3,
    message:
      'Truly a game-changer for dance lovers. The workshops are diverse and cater to all levels. I had a wonderful experience!',
    name: 'Priya Mehta',
    title: 'Dance Enthusiast',
    rating: 4, // Example rating
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

  // Function to render stars based on the rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-${i < rating ? 'yellow-400' : 'gray-300'} text-lg`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="bg-[#3FA1DE] py-16 px-4 relative h-[400px] flex items-center"> {/* Flexbox for vertical centering */}
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
        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {renderStars(reviews[currentIndex].rating)} {/* Render stars */}
        </div>

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
