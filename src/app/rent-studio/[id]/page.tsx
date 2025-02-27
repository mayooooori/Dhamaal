import Image from 'next/image';
import studiosData from '../../../../data/studios.json';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Studio {
  id: number;
  name: string;
  location: string;
  price_per_hour: number;
  description: string;
  website?: string;
  dates_available: string[];
  images: string[];
}

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
    return <div>Studio not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen mt-5 p-6'>
        <h1 className='text-4xl font-bold'>{studio.name}</h1>
        <p className='text-xl font-semibold'>{studio.location}</p>
        <p className='text-lg'>${studio.price_per_hour} per hour</p>
        <p className='text-sm text-gray-700 mt-4'>{studio.description}</p>

        {/* Studio Website Link */}
        {studio.website && (
          <div className='mt-4'>
            <a
              href={studio.website}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              Visit Official Website
            </a>
          </div>
        )}

        <div className='mt-6'>
          <h2 className='text-2xl font-semibold'>Available Dates</h2>
          <ul>
            {studio.dates_available.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>

        <div className='mt-6'>
          <h2 className='text-2xl font-semibold'>Images</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {studio.images.map((image, index) => (
              <div key={index} className='w-full h-64'>
                <Image
                  src={image} // Image source
                  alt={`Studio ${studio.name} image ${index + 1}`}
                  layout='responsive'
                  width={500}
                  height={300}
                  className='object-cover rounded-md'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
