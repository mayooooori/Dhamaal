import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface StudioCardProps {
  image: string;
  name: string;
  location: string;
  price: string;
  description: string;
  studioUrl: string;
}

const StudioCard: React.FC<StudioCardProps> = ({ image, name, location, price, description, studioUrl }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
      <div className="relative w-full h-72"> {/* Increased height for a rectangular look */}
        <Image
          src={image}
          alt={`${name} Studio`}
          layout="fill"
          objectFit="cover"
          quality={75}
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl sm:text-base md:text-xl font-semibold text-gray-800">{name}</h3>
          <span className="text-lg sm:text-sm md:text-lg text-gray-600">{price.replace('per hour', '/hr')}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2 line-clamp-3">{description}</p>
        <p className="text-sm text-gray-600 mt-2">{location}</p>
        
        {/* Exact button styling */}
        <Link
          href={studioUrl}
          className="mt-4 inline-block w-full py-2 px-4 border border-black bg-white text-black text-center rounded-sm hover:bg-slate-200 transition-colors"
        >
          View Studio
        </Link>
      </div>
    </div>
  );
};

export default StudioCard;
