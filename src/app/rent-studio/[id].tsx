import { GetServerSideProps } from "next";
import Image from "next/image"; // Import the Image component from Next.js
import studiosData from "../../../data/studios.json"; // Import the mock JSON data

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

interface StudioDetailsProps {
  studio: Studio | null;
}

const StudioDetails = ({ studio }: StudioDetailsProps) => {
  if (!studio) {
    return <div>Studio not found</div>; // Handle if the studio is not found
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{studio.name}</h1>
      <p className="text-xl font-semibold">{studio.location}</p>
      <p className="text-lg">${studio.price_per_hour} per hour</p>
      <p className="text-sm text-gray-700 mt-4">{studio.description}</p>

      {/* Studio Website Link */}
      {studio.website && (
        <div className="mt-4">
          <a
            href={studio.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Official Website
          </a>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Available Dates</h2>
        <ul>
          {studio.dates_available.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Images</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {studio.images.map((image, index) => (
            <div key={index} className="w-full h-64">
              <Image
                src={image} // Image source
                alt={`Studio ${studio.name} image ${index + 1}`} // Alt text for accessibility
                layout="responsive" // Ensures the image maintains its aspect ratio
                width={500} // Define the width of the image
                height={300} // Define the height of the image
                className="object-cover rounded-md" // Styling for the image
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Fetching data on the server-side to ensure the correct data is passed on initial render
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;
  const studioId = parseInt(id as string, 10);

  // Find the studio by id
  const studio =
    studiosData.studios.find((studio) => studio.id === studioId) || null;

  return {
    props: {
      studio, // Pass the studio data as props
    },
  };
};

export default StudioDetails;
