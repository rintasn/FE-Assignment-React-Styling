"use client";

import React, { useState } from 'react';
import { Share2, Heart, Repeat2 } from 'lucide-react';

// Define an interface for the product type
interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

// Define the props type for the component
interface ContentProps {
  products: Product[];
}

const Content: React.FC<ContentProps> = ({ products }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="flex justify-center items-center text-2xl font-bold pt-5">
        <p>Our Products</p>
      </div>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="grid grid-cols-4 gap-4 max-w-5xl">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-md shadow-md p-4 flex flex-col w-64 h-100 relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-70 object-cover rounded-md mb-2"
                />
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300">
                      Add to Cart
                    </button>
                    <div className="flex space-x-2 mt-4">
                      <Share2 className="text-white hover:text-gray-300 cursor-pointer" size={20} />
                      <Heart className="text-white hover:text-gray-300 cursor-pointer" size={20} />
                      <Repeat2 className="text-white hover:text-gray-300 cursor-pointer" size={20} />
                    </div>
                  </div>
                )}
              </div>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="font-bold justify-start">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;