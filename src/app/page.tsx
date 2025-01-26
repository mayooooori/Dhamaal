import Banner from "@/components/Banner";
import ContactBanner from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero />
        <Reviews />
        <ContactBanner />
        <Banner />
      </main>
    </div>
  );
}
