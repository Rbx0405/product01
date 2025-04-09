import Link from 'next/link';
import { ShoppingBagIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-purple-600">FASHION</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/men" className="text-gray-600 hover:text-purple-600">Men</Link>
            <Link href="/women" className="text-gray-600 hover:text-purple-600">Women</Link>
            <Link href="/kids" className="text-gray-600 hover:text-purple-600">Kids</Link>
            <Link href="/sale" className="text-gray-600 hover:text-purple-600">Sale</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <UserIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBagIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
