export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Tibhar Style. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-sm mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
