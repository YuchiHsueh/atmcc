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
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/products" className="hover:text-gray-400">
            Products
          </Link>
          <Link href="/events" className="hover:text-gray-400">
            Events
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
