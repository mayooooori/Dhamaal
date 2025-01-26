import Image from 'next/image';

const ArtistCard = () => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-48">
        <Image
          src="/artist.png" // Use your image path here
          alt="Artist"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image covers the div without distortion
          quality={75} // Adjust the image quality for optimal performance
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">Artist Name</h3>
        <p className="text-sm text-gray-500 mt-2">This is a short bio about the artist. They are known for dancing. they can dance well</p>
      </div>
    </div>
  );
};

export default ArtistCard;
