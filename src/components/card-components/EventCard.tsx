import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface EventCardProps {
  image: string;
  name: string;
  price: string;
  subContext: string;
  eventUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  name,
  price,
  subContext,
  eventUrl,
}) => {
  return (
    <div className='max-w-xs rounded-lg overflow-hidden shadow-lg bg-white'>
      <div className='relative w-full h-72'>
        {' '}
        {/* Increased height for a rectangular look */}
        <Image
          src={image}
          alt={`${name} Poster`}
          layout='fill'
          objectFit='cover'
          quality={75}
        />
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl font-semibold'>{name}</h3>
          <span className='text-lg text-gray-600'>{price}</span>
        </div>
        <p className='text-sm text-gray-500 mt-2'>{subContext}</p>
        <Link
          href={eventUrl}
          className='mt-4 inline-block w-full py-2 px-4 border border-black bg-white text-black text-center rounded-sm hover:bg-slate-200 transition-colors'
        >
          View Event
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
