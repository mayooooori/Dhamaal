// components/Banner.tsx

import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="bg-[#F2BF0C] text-black py-12"> {/* Increased padding and changed background color */}
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-5xl font-bold mt-5 mb-4">
          Where every dancer <br/> finds home
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md border border-blue-600 m-5">
          Search Events
        </button>
      </div>
    </section>
  );
};

export default Banner;
