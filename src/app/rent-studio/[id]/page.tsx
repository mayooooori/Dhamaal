import Image from 'next/image';
import studiosData from '../../../../data/studios.json';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { Button } from '@/components/ui/button';

// interface Studio {
//   id: number;
//   name: string;
//   location: string;
//   price_per_hour: number;
//   description: string;
//   website?: string;
//   dates_available: string[];
//   images: string[];
// }

async function getStudio(id: string) {
  const studioId = parseInt(id, 10);
  return studiosData.studios.find((studio) => studio.id === studioId) || null;
}

export default async function StudioDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const studio = await getStudio(resolvedParams.id);

  if (!studio) {
    return (
      <div className='text-center text-xl font-semibold mt-10'>
        Studio not found
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen py-10 px-6 max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className='space-y-4'>
            <h1 className='text-4xl font-bold text-gray-900'>{studio.name}</h1>
            <p className='text-lg text-gray-700'>{studio.location}</p>
            <p className='text-xl font-semibold text-gray-800'>
              ${studio.price_per_hour} per hour
            </p>
            <p className='text-gray-600 leading-relaxed'>
              {studio.description}
            </p>
            {studio.website && (
              <a
                href={studio.website}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline text-md block mt-2'
              >
                Visit Official Website
              </a>
            )}
            <div className='mt-4'>
              <Button className='mt-2 font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300'>
                Rent Studio
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={studio.images[0]}
              alt={`Studio ${studio.name}`}
              width={600}
              height={400}
              className='rounded-xl shadow-md object-cover'
            />
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
            Available Dates
          </h2>
          <div className='flex flex-wrap gap-2'>
            {studio.dates_available.map((date, index) => (
              <span
                key={index}
                className='px-3 py-1 bg-gray-100 rounded-md text-gray-700 text-sm'
              >
                {date}
              </span>
            ))}
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Gallery</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {studio.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Studio ${studio.name} image ${index + 1}`}
                width={300}
                height={200}
                className='rounded-lg shadow-sm object-cover'
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
