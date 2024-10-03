import React from 'react';
import Image from 'next/image';

export default function KidsCard() {
  // Kids clothing items
  const kidsClothes = [
    { image: '/images/kids1.jpg', title: 'Colorful T-shirt', price: '$19.99' },
    { image: '/images/kids2.jpg', title: 'Cartoon Hoodie', price: '$29.99' },
    { image: '/images/kids3.jpg', title: 'Cute Dress', price: '$24.99' },
    { image: '/images/kids4.jpg', title: 'Playful Shorts', price: '$14.99' },
    { image: '/images/kids5.jpg', title: 'Bright Sneakers', price: '$39.99' },
    { image: '/images/kids1.jpg', title: 'Colorful T-shirt', price: '$19.99' },
    { image: '/images/kids2.jpg', title: 'Cartoon Hoodie', price: '$29.99' },
    { image: '/images/kids3.jpg', title: 'Cute Dress', price: '$24.99' },
    { image: '/images/kids4.jpg', title: 'Playful Shorts', price: '$14.99' },
    { image: '/images/kids5.jpg', title: 'Bright Sneakers', price: '$39.99' },
    
    { image: '/images/kids4.jpg', title: 'Playful Shorts', price: '$14.99' },
    { image: '/images/kids5.jpg', title: 'Bright Sneakers', price: '$39.99' },

  ];

  return (
    <div className='flex gap-5 flex-wrap mt-5 justify-center'>
      {kidsClothes.map((item, index) => (
        <div key={index} className="w-[250px] h-[350px] shadow-lg mt-5 bg-pink-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full h-[200px]">
            <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
          </div>
          <div className="p-4 bg-pink-200">
            <h2 className="text-lg font-semibold text-pink-800">{item.title}</h2>
            <p className="text-pink-600 mt-2">{item.price}</p>
            <button className="mt-4 w-full py-2 bg-pink-500 text-white text-sm font-semibold rounded-lg hover:bg-pink-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
