import Image from 'next/image';
import React from 'react';

interface ArtistCardProps {
  image: string;
  name: string;
  bio1: string;
  bio2: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ image, name, bio1, bio2 }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-48">
        <Image
          src={image} // Use the passed image prop
          alt={name} // Use the passed name prop for alt text
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image covers the div without distortion
          quality={75} // Adjust the image quality for optimal performance
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-500 mt-2">{bio1}</p>
        <p className="text-sm text-gray-500 mt-1">{bio2}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
