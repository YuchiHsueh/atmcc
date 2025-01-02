import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/atmcc-logo/logo.png"
              alt="ATMCC Logo"
              width={150}
              height={50}
              className="object-contain"
            />
            ATMCC
          </Link>
        </div>
        <div className="flex gap-6 text-sm font-medium uppercase tracking-wide">
          <Link href="/" className="hover:text-gray-400">
            Sobre Nosotros
          </Link>
          <Link href="/" className="hover:text-gray-400">
            Nuestros Jugadores
          </Link>
          <Link href="/" className="hover:text-gray-400">
            Nuestros Sponsors
          </Link>
          <Link href="/" className="hover:text-gray-400">
            Contactanos
          </Link>
        </div>
      </div>
    </nav>
  );
}
