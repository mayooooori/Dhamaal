import EventCard from "@/components/EventCard";
import ExploreSection from "@/components/ExploreSection";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  // Example data for events
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow mt-16 md:mt-20">
        <div className="container mx-auto px-4">
          <ExploreSection />
          <SearchBar />

          {/* Event Cards Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
          </div>
        </div>
      </main>
    </div>
  );
}
