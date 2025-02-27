import Navbar from '@/components/common/Navbar';
import StudioCard from '@/components/card-components/StudioCard';
import studiosData from '../../data/studios.json';

export default function RentStudio() {
  return (
    <div>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className='mt-5 p-4'>
        <h1 className='text-4xl font-bold mb-4'>Rent a Studio</h1>
        <p className='text-lg mb-6'>
          Find the perfect studio for your creative projects. Browse through
          available spaces and book them today!
        </p>

        {/* Search Bars Section */}
        <div className='flex gap-6 mb-6'>
          {/* Search Bar for Studio */}
          <div className='w-full sm:w-80 md:w-72'>
            <label
              htmlFor='studio-search'
              className='block text-sm font-medium text-gray-700'
            >
              Search Studio
            </label>
            <input
              id='studio-search'
              type='text'
              placeholder='Search for a studio'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          </div>

          {/* Search Bar for Location with Dropdown */}
          <div className='w-full sm:w-80 md:w-72'>
            <label
              htmlFor='location-search'
              className='block text-sm font-medium text-gray-700'
            >
              Location
            </label>
            <select
              id='location-search'
              className='w-full p-2 border border-gray-300 rounded-md mt-1'
            >
              <option value=''>Select a location</option>
              <option value='downtown'>Downtown</option>
              <option value='midtown'>Midtown</option>
              <option value='uptown'>Uptown</option>
              <option value='suburbs'>Suburbs</option>
              {/* Add more locations as needed */}
            </select>
          </div>
        </div>

        {/* Cards Display */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {studiosData.studios.map((studio) => (
            <StudioCard
              key={studio.id} // Add a unique key for each studio card
              image={studio.images[0]} // Use the first image from the images array
              name={studio.name}
              location={studio.location}
              price={`$${studio.price_per_hour} per hour`}
              href={`/rent-studio/${studio.id}`} // This will navigate to the studio details page
            />
          ))}
        </div>
      </div>
    </div>
  );
}
