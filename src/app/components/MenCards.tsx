import React from 'react';
import Image from 'next/image';

export default function BoysCard() {
  // Boys clothing items
  const boysClothes = [
    { image: '/images/men1.jpg', title: 'Denim Jeans', price: '$39.99' },
    { image: '/images/men2.jpg', title: 'Leather Shoes', price: '$79.99' },
    { image: '/images/men3.avif', title: 'Trendy Sweater', price: '$34.99' },
    { image: '/images/men1.jpg', title: 'Denim Jeans', price: '$39.99' },
    { image: '/images/men2.jpg', title: 'Leather Shoes', price: '$79.99' },
    { image: '/images/men3.avif', title: 'Trendy Sweater', price: '$34.99' },
    { image: '/images/men1.jpg', title: 'Denim Jeans', price: '$39.99' },
    { image: '/images/men2.jpg', title: 'Leather Shoes', price: '$79.99' },
    { image: '/images/men3.avif', title: 'Trendy Sweater', price: '$34.99' },
  ];

  return (
    <div className='flex gap-5 flex-wrap mt-5 justify-center'>
      {boysClothes.map((item, index) => (
        <div key={index} className="w-[300px] h-[400px] shadow-lg mt-5 bg-blue-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full h-[250px]">
            <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
          </div>
          <div className="p-4 bg-blue-200">
            <h2 className="text-lg font-semibold text-blue-800">{item.title}</h2>
            <p className="text-blue-600 mt-2">{item.price}</p>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
