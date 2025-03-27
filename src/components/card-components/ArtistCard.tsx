import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ArtistCardProps {
  image: string;
  name: string;
  bio: string;
  artistURL: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  image,
  name,
  bio,
  artistURL,
}) => {
  return (
    <div className='max-w-xs rounded-lg overflow-hidden shadow-lg bg-white'>
      {/* Image section */}
      <div className='relative w-full h-72'>
        {' '}
        <Image
          src={image}
          alt={name}
          layout='fill'
          objectFit='cover'
          quality={75}
        />
      </div>

      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl font-semibold text-gray-800'>{name}</h3>
        </div>
        <p className='text-sm text-gray-500 mt-2 line-clamp-3'>{bio}</p>
        <Link
          href={artistURL}
          className='mt-4 inline-block w-full py-2 px-4 border border-black bg-white text-black text-center rounded-sm hover:bg-slate-200 transition-colors'
        >
          View Artist
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
