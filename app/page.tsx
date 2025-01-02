import Navbar from './components/navbar';
import Footer from './components/footer';
import Sponsors from './components/sponsors';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <section 
          className="relative bg-cover bg-center h-[80vh]" 
          style={{ backgroundImage: "url('/gifs/tt.webp')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-5xl text-white font-bold uppercase text-center">
              Bienvenidos a la Asociación de Tenis de Mesa Comunidad China
            </h1>
          </div>
        </section>
        <section className="max-w-7xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Nuestros jugadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/pictures/fzd.jpeg"
              alt="fzd"
              width={450}
              height={150}
              className="object-cover rounded-lg"
            />
              
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
            <Image
              src="/pictures/ml.jpeg"
              alt="ml"
              width={450}
              height={150}
              className="object-cover rounded-lg"
            />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <Image
                src="/pictures/cm.jpeg"
                alt="cm"
                width={450}
                height={150}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
