import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-5xl text-white font-bold uppercase text-center">
              Welcome to Table Tennis
            </h1>
          </div>
        </section>
        <section className="max-w-7xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Events</h2>
          <p className="text-gray-600 mb-10">
            Explore upcoming tournaments and events across the globe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/event-1.jpg" alt="Event 1" className="rounded-md mb-4" />
              <h3 className="font-bold text-lg">Event Name</h3>
              <p className="text-sm text-gray-500">Date & Location</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/event-2.jpg" alt="Event 2" className="rounded-md mb-4" />
              <h3 className="font-bold text-lg">Event Name</h3>
              <p className="text-sm text-gray-500">Date & Location</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/event-3.jpg" alt="Event 3" className="rounded-md mb-4" />
              <h3 className="font-bold text-lg">Event Name</h3>
              <p className="text-sm text-gray-500">Date & Location</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
