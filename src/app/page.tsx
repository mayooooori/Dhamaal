import EventCard from '@/components/card-components/EventCard';
import ArtistCard from '@/components/card-components/ArtistCard';
import ContactBanner from '@/components/home-components/Contact';
import Hero from '@/components/home-components/Hero';
import Navbar from '@/components/common/Navbar';
import Reviews from '@/components/home-components/Reviews';
import Link from 'next/link';
import Footer from '@/components/common/Footer';
import Banner from '@/components/home-components/Banner';
import artistsData from '../../data/artist.json';

export default function Home() {
  const eventData = [
    {
      image: '/event.png',
      name: 'Event Name 1',
      price: '$50',
      subContext: 'Sub context about the event.',
      eventUrl: '/event-details/1',
    },
    {
      image: '/event.png',
      name: 'Event Name 2',
      price: '$30',
      subContext: 'Sub context about the event.',
      eventUrl: '/event-details/2',
    },
    {
      image: '/event.png',
      name: 'Event Name 3',
      price: '$40',
      subContext: 'Sub context about the event.',
      eventUrl: '/event-details/3',
    },
    {
      image: '/event.png',
      name: 'Event Name 4',
      price: '$60',
      subContext: 'Sub context about the event.',
      eventUrl: '/event-details/4',
    },
  ];

  // Function to get 4 random artists
  function getRandomArtists() {
    const shuffled = [...artistsData.artists].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }

  const randomArtists = getRandomArtists();

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <main className='flex-grow'>
        <Hero />

        <div className='mt-8 px-4'>
          <h2 className='text-2xl font-semibold mb-4'>Upcoming Events</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
            {eventData.map((event, index) => (
              <EventCard
                key={index}
                image={event.image}
                name={event.name}
                price={event.price}
                subContext={event.subContext}
                eventUrl={event.eventUrl}
              />
            ))}
          </div>
          <div className='mt-4 text-center'>
            <Link
              href='/search'
              className='inline-block py-2 px-14 mt-4 border border-black bg-white text-black rounded-sm hover:bg-slate-200 transition-colors'
            >
              See More Events
            </Link>
          </div>
        </div>

        <div className='mt-8 px-4 pb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Featured Artists</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
            {randomArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                image={artist.profile_image}
                name={artist.name}
                bio={artist.description}
                artistURL={`/artists/${artist.id}`}
              />
            ))}
          </div>
          <div className='mt-4 text-center'>
            <Link
              href='/artists'
              className='inline-block py-2 px-14 mt-4 border border-black bg-white text-black rounded-sm hover:bg-slate-200 transition-colors'
            >
              See More Artists
            </Link>
          </div>
        </div>
        <Reviews />
        <ContactBanner />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
