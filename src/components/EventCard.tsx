import Image from 'next/image';
import Link from 'next/link';

const EventCard = () => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-48">
        <Image
          src="/event.png" // Use your image URL or path
          alt="Event Poster"
          layout="fill"
          objectFit="cover"
          quality={75} // Optional: adjust quality for better performance
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Event Name</h3>
          <span className="text-lg font-semibold text-gray-900">$50</span>
        </div>
        <p className="text-sm text-gray-500 mt-2 mb-4">Sub context about the event.</p>
        <Link 
          href="/event-details" 
          className="block w-full py-2 px-4 bg-white text-black border border-black text-center rounded-sm hover:bg-slate-300 transition-colors duration-300"
        >
          View Event
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
