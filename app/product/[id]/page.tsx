'use client';

import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import { useState } from 'react';

// This would typically come from an API
const getProduct = (id: string) => {
  const products = [
    {
      id: "1",
      name: "Casual Cotton T-Shirt",
      brand: "Fashion Brand",
      price: 599,
      image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=T-Shirt",
      description: "A comfortable casual t-shirt made from 100% cotton. Perfect for everyday wear.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Gray", "Navy"]
    },
    {
      id: "2",
      name: "Slim Fit Jeans",
      brand: "Denim Co",
      price: 1299,
      image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Jeans",
      description: "Classic slim fit jeans with a modern touch. Made from high-quality denim.",
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Blue", "Black", "Gray"]
    },
    // Add more products as needed
  ];
  
  return products.find(p => p.id === id);
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center py-16">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        quantity: 1
      }
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[3/4]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-600 mt-1">{product.brand}</p>
            </div>
            
            <p className="text-2xl font-bold text-purple-600">₹{product.price}</p>
            
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-full ${
                      selectedSize === size
                        ? 'border-purple-600 text-purple-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-full ${
                      selectedColor === color
                        ? 'border-purple-600 text-purple-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={addToCart}
              className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
