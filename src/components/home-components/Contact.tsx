'use client';
import React from 'react';
import Image from 'next/image';

const ContactBanner: React.FC = () => {
  return (
    <section className='bg-white py-12'>
      <div className='container mx-auto flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-2'>
        {/* Instagram Section */}
        <a
          href='https://www.instagram.com/yourprofile' // Replace with your Instagram link
          target='_blank'
          rel='noopener noreferrer'
          className='mb-8 w-full max-w-[600px] border border-gray-300 rounded-md sm:px-4'
        >
          <Image
            src='/instagram.png' // Replace with your Instagram rectangular image path
            alt='Instagram'
            width={600} // Adjust width as needed
            height={200} // Adjust height as needed
            className='object-fill rounded-md cursor-pointer w-full h-full' // Ensures image fits border
          />
        </a>

        {/* WhatsApp Section */}
        <div className='w-full max-w-[600px] border border-gray-300 p-6 flex items-center justify-between rounded-md shadow-lg sm:px-4'>
          {/* WhatsApp Icon */}
          <div className='flex items-center space-x-4'>
            <Image
              src='/whatsapp.png' // Replace with your WhatsApp icon path
              alt='WhatsApp'
              width={90}
              height={90}
            />
          </div>

          {/* Heading */}
          <h3 className='text-xs font-semibold text-center flex-grow lg:text-lg'>
            {' '}
            {/* Reduced font size on mobile */}
            Join our WhatsApp community to build your network with top artists
          </h3>

          {/* Join Button */}
          <button
            onClick={() =>
              window.open('https://wa.me/yourwhatsappnumber', '_blank')
            } // Replace with your WhatsApp link
            className='bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-[#128C7E] transition'
          >
            Join
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
