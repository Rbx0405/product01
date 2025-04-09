'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

// This would typically come from an API or database
const products = [
  {
    id: "1",
    name: "Casual Cotton T-Shirt",
    brand: "Fashion Brand",
    price: 599,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=T-Shirt",
    category: "Men",
    discount: 20
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    brand: "Denim Co",
    price: 1299,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Jeans",
    category: "Men",
    discount: 15
  },
  {
    id: "3",
    name: "Summer Dress",
    brand: "Style Studio",
    price: 899,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Dress",
    category: "Women",
    discount: 25
  },
  {
    id: "4",
    name: "Classic White Shirt",
    brand: "Fashion Brand",
    price: 799,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Shirt",
    category: "Men",
    discount: 10
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState(products);

  useEffect(() => {
    if (query) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(products);
    }
  }, [query]);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {query ? `Search results for "${query}"` : 'All Products'}
          </h1>
          <p className="text-gray-600">{results.length} products found</p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <p className="text-gray-600">Try adjusting your search terms or browse our categories</p>
          </div>
        )}
      </div>
    </div>
  );
}
