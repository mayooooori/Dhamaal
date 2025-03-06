'use client';

import Image from 'next/image';
import artistsData from '../../../../data/artist.json';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { useParams } from 'next/navigation';

// interface Artist {
//   id: number;
//   name: string;
//   banner?: string;
//   image?: string;
//   description: string;
//   event_ids: number[];
//   danceVideos: string[];
// }

export default function ArtistDetails() {
  const { id } = useParams();
  const artist = artistsData.artists.find((a) => a.id === Number(id));

  if (!artist) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center text-gray-700 text-xl'>
        <p>Artist not found</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        {/* Banner */}
        <div className='relative w-full h-64 md:h-80'>
          <Image
            src={artist.banner_image}
            alt={`${artist.name} banner`}
            layout='fill'
            objectFit='cover'
            className='rounded-b-lg'
          />
        </div>

        {/* Artist Info */}
        <div className='max-w-5xl mx-auto px-6 py-10'>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            {/* Artist Image */}
            <div className='w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-md'>
              <Image
                src={artist.profile_image}
                alt={artist.name}
                layout='fill'
                objectFit='cover'
              />
            </div>

            {/* Name & Description */}
            <div>
              <h1 className='text-4xl font-bold text-gray-900'>
                {artist.name}
              </h1>
              <p className='text-gray-600 mt-4 leading-relaxed'>
                {artist.description}
              </p>
            </div>
          </div>

          {/* Events Section */}
          <div className='mt-10'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Events by {artist.name}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {artist.event_ids.length > 0 ? (
                artist.event_ids.map((eventId, index) => (
                  <div
                    key={index}
                    className='p-4 border rounded-lg shadow-sm bg-gray-100'
                  >
                    Event ID: {eventId}
                  </div>
                ))
              ) : (
                <p className='text-gray-500'>No events listed.</p>
              )}
            </div>
          </div>

          {/* Dance Videos Section */}
          <div className='mt-10'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Dance Videos
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {artist.dance_videos.length > 0 ? (
                artist.dance_videos.map((video, index) => (
                  <iframe
                    key={index}
                    src={video}
                    title={`Dance video ${index + 1}`}
                    allowFullScreen
                    className='w-full h-52 md:h-64 rounded-lg shadow-md'
                  ></iframe>
                ))
              ) : (
                <p className='text-gray-500'>No videos available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
