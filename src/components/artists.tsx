import Navbar from '@/components/common/Navbar';
import ArtistCard from '@/components/card-components/ArtistCard';
import Footer from '@/components/common/Footer';
import artistsData from '../../data/artist.json';

export default function Artists() {
  return (
    <div>
      <Navbar />

      <div className='mt-5 p-4'>
        <h1 className='text-4xl font-bold mb-4'>Explore Artist</h1>
        <p className='text-lg mb-6'>
          Find the perfect artist for your creative projects. Browse through
          available artists and book them today!
        </p>

        <div className='flex gap-6 mb-6'>
          <div className='w-full sm:w-80 md:w-72'>
            <label
              htmlFor='artist-search'
              className='block text-sm font-medium text-gray-700'
            >
              Search Artist
            </label>
            <input
              id='artist-search'
              type='text'
              placeholder='Search for an artist'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className='w-full sm:w-80 md:w-72'>
            <label
              htmlFor='specialty-search'
              className='block text-sm font-medium text-gray-700'
            >
              Specialty
            </label>
            <select
              id='specialty-search'
              className='w-full p-2 border border-gray-300 rounded-md mt-1'
            >
              <option value=''>Select a specialty</option>
              <option value='hip-hop'>Hip-Hop</option>
              <option value='contemporary'>Contemporary</option>
              <option value='ballet'>Ballet</option>
              <option value='jazz'>Jazz</option>
              <option value='salsa'>Salsa</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {artistsData.artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              image={artist.profile_image}
              name={artist.name}
              bio={artist.description}
              artistURL={`/artists/${artist.id}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
