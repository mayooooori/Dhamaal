import Navbar from "@/components/Navbar";
import ArtistCard from "@/components/ArtistCard"; // Import your ArtistCard component
import Footer from "@/components/Footer";

export default function Artists() {
  return (
    <div>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="mt-20 p-4">
        <h1 className="text-4xl font-bold mb-4">Explore Artist</h1>
        <p className="text-lg mb-6">
          Find the perfect artist for your creative projects. Browse through
          available artists and book them today!
        </p>

        {/* Search Bars Section */}
        <div className="flex gap-6 mb-6">
          {/* Search Bar for Artist */}
          <div className="w-full sm:w-80 md:w-72">
            <label
              htmlFor="artist-search"
              className="block text-sm font-medium text-gray-700"
            >
              Search Artist
            </label>
            <input
              id="artist-search"
              type="text"
              placeholder="Search for an artist"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Search Bar for Specialty with Dropdown */}
          <div className="w-full sm:w-80 md:w-72">
            <label
              htmlFor="specialty-search"
              className="block text-sm font-medium text-gray-700"
            >
              Specialty
            </label>
            <select
              id="specialty-search"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option value="">Select a specialty</option>
              <option value="painting">Painting</option>
              <option value="sculpture">Sculpture</option>
              <option value="photography">Photography</option>
              <option value="digital">Digital Art</option>
              {/* Add more specialties as needed */}
            </select>
          </div>
        </div>

        {/* Cards Display */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Artist Card 1 */}
          <ArtistCard
            image="/artist.png"
            name="John Doe"
            bio="A professional photographer with years of experience."
            artistURL="/artist/artist-name"
          />
          {/* Example Artist Card 2 */}
          <ArtistCard
            image="/artist.png"
            name="Jane Smith"
            bio="An accomplished painter focused on abstract art."
            artistURL="/artist/artist-name"
          />
          {/* Add more ArtistCard components as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
