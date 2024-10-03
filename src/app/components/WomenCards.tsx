// import React from 'react'
// import Image from 'next/image'

// export default function Card() {
//   const clothes = [
//     { image: '/images/down2.jpg', title: 'Stylish Jacket', price: '$49.99' },
//     { image: '/images/down2.jpg', title: 'Casual Shirt', price: '$29.99' },
//     { image: '/images/down2.jpg', title: 'Summer Dress', price: '$59.99' },
//     { image: '/images/down2.jpg', title: 'Denim Jeans', price: '$39.99' },
//     { image: '/images/down2.jpg', title: 'Leather Shoes', price: '$79.99' },
//     { image: '/images/down2.jpg', title: 'Trendy Sweater', price: '$34.99' },
//   ];

//   return (
//     <div className='flex gap-5 flex-wrap mt-5 justify-center'>
//       {clothes.map((item, index) => (
//         <div key={index} className="w-[300px] h-[400px] shadow-lg mt-5 bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//           <div className="relative w-full h-[250px]">
//             <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
//           </div>
//           <div className="p-4 bg-gray-100">
//             <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
//             <p className="text-gray-600 mt-2">{item.price}</p>
//             <button className="mt-4 w-full py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import React from 'react';
import Image from 'next/image';

export default function GirlsCard() {
  // Girls clothing items
  const girlsClothes = [
    { image: '/images/down2.jpg', title: 'Stylish Jacket', price: '$49.99' },
    { image: '/images/down2.jpg', title: 'Casual Shirt', price: '$29.99' },
    { image: '/images/down2.jpg', title: 'Summer Dress', price: '$59.99' },
    { image: '/images/down2.jpg', title: 'Stylish Jacket', price: '$49.99' },
    { image: '/images/down2.jpg', title: 'Casual Shirt', price: '$29.99' },
    { image: '/images/down2.jpg', title: 'Summer Dress', price: '$59.99' },
    { image: '/images/down2.jpg', title: 'Stylish Jacket', price: '$49.99' },
    { image: '/images/down2.jpg', title: 'Casual Shirt', price: '$29.99' },
    { image: '/images/down2.jpg', title: 'Summer Dress', price: '$59.99' },
  ];

  return (
    <div className='flex gap-5 flex-wrap mt-5 justify-center'>
      {girlsClothes.map((item, index) => (
        <div key={index} className="w-[300px] h-[400px] shadow-lg mt-5 bg-pink-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full h-[250px]">
            <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
          </div>
          <div className="p-4 bg-pink-200">
            <h2 className="text-lg font-semibold text-pink-800">{item.title}</h2>
            <p className="text-pink-600 mt-2">{item.price}</p>
            <button className="mt-4 w-full py-2 bg-pink-600 text-white text-sm font-semibold rounded-lg hover:bg-pink-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
