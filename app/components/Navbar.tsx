'use client';

import Link from 'next/link';
import { ShoppingBagIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';

const Navbar = () => {
  const { state } = useCart();
  const { setIsSearchOpen } = useSearch();
  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

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
            <button 
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <UserIcon className="h-6 w-6 text-gray-600" />
            </button>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingBagIcon className="h-6 w-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
