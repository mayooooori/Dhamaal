import EventCard from '@/components/card-components/EventCard';
import ArtistCard from '@/components/card-components/ArtistCard';
import ContactBanner from '@/components/home-components/Contact';
import Hero from '@/components/home-components/Hero';
import Navbar from '@/components/common/Navbar';
import Reviews from '@/components/home-components/Reviews';
import Link from 'next/link'; // Import Link for navigation
import Footer from '@/components/common/Footer';
import Banner from '@/components/home-components/Banner';

export default function Home() {
  // Example data for events and artists
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

  const artistData = [
    {
      image: '/artist.png',
      name: 'Artist Name 1',
      bio: 'This is a short bio about the artist.',
      artistURL: '/artist-details/1',
    },
    {
      image: '/artist.png',
      name: 'Artist Name 2',
      bio: 'This is a short bio about the artist.',
      artistURL: '/artist-details/2',
    },
    {
      image: '/artist.png',
      name: 'Artist Name 3',
      bio: 'This is a short bio about the artist.',
      artistURL: '/artist-details/3',
    },
    {
      image: '/artist.png',
      name: 'Artist Name 4',
      bio: 'This is a short bio about the artist.',
      artistURL: '/artist-details/4',
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className='flex-grow'>
        <Hero />

        {/* Event Cards */}
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

        {/* Artist Cards */}
        <div className='mt-8 px-4 pb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Featured Artists</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
            {artistData.map((artist, index) => (
              <ArtistCard
                key={index}
                image={artist.image}
                name={artist.name}
                bio={artist.bio}
                artistURL={artist.artistURL}
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
