'use client';

import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSearch } from '../context/SearchContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// This would typically come from an API or database
const products = [
  {
    id: "1",
    name: "Casual Cotton T-Shirt",
    brand: "Fashion Brand",
    price: 599,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=T-Shirt",
    category: "Men"
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    brand: "Denim Co",
    price: 1299,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Jeans",
    category: "Men"
  },
  {
    id: "3",
    name: "Summer Dress",
    brand: "Style Studio",
    price: 899,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Dress",
    category: "Women"
  },
  {
    id: "4",
    name: "Classic White Shirt",
    brand: "Fashion Brand",
    price: 799,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Shirt",
    category: "Men"
  },
];

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useSearch();
  const [results, setResults] = useState(products);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(products);
    }
  }, [searchQuery]);

  const handleProductClick = (productId: string) => {
    setIsSearchOpen(false);
    router.push(`/product/${productId}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(false);
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <Transition.Root show={isSearchOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsSearchOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <form onSubmit={handleSubmit} className="relative">
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-500"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </form>

              {results.length > 0 ? (
                <div className="flex-1 divide-y divide-gray-100 overflow-y-auto px-4 py-2 max-h-96">
                  {results.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 py-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <div className="relative h-16 w-16">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-500">{product.brand}</p>
                        <p className="text-sm font-medium text-purple-600">₹{product.price}</p>
                      </div>
                      <div className="text-xs text-gray-400">{product.category}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-sm text-gray-500">
                  No products found matching your search.
                </div>
              )}

              {results.length > 0 && (
                <div className="p-4 text-center border-t">
                  <button
                    type="button"
                    className="text-sm text-purple-600 hover:text-purple-700"
                    onClick={handleSubmit}
                  >
                    View all results
                  </button>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
