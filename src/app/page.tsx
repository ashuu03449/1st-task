"use client"; // This ensures the entire component is treated as a client-side component.

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // useRouter from next/navigation in the app directory
import ImageSlider from "./components/ImageSlider"; // Slider component import karna

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // Menu toggle karne ke liye state
  const router = useRouter(); // Get the current route

  const navLinks = [
    { href: "/men", label: "MEN" },
    { href: "/women", label: "WOMEN" },
    { href: "/kids", label: "KIDS" },
    { href: "/home", label: "HOME & LIVING" },
    { href: "/beauty", label: "BEAUTY" },
    { href: "/studio", label: "STUDIO" }
  ];

  // ImageSlider ke liye slides define karna
  const slides = [  { type: 'video', src: "/images/clothes.mp4" },
    { type: 'image', src: "/images/down2.jpg" },
    { type: 'image', src: "/images/download (1).jpg" },
    { type: 'image', src: "/images/download (2).jpg" },
    { type: 'image', src: "/images/download.jpg" },
    { type: 'image', src: "/images/hq720 (1).jpg" },
    { type: 'image', src: "/images/hq720.jpg" },
    { type: 'image', src: "/images/images (1).jpg" },
    { type: 'image', src: "/images/images (2).jpg" },
    { type: 'image', src: "/images/images.jpg" },
    { type: 'video', src: "/images/down2.jpg" },
    // Aap aur images add kar sakte hain
  ];

  return (
    <div>
      <header className="shadow-md flex items-center justify-between py-4 px-6 gap-5 w-full bg-white z-50 fixed top-0 left-0">
        <div className="flex items-center justify-between w-[45%]">
          <Image src="/images/zapnglogo.png" alt="Logo" width={100} height={100} />
          
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)} 
          >
            <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-gray-800`}></i>
          </button>

          <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static bg-white w-full md:w-auto top-[60px] left-0 md:top-auto md:left-auto`}>
            <ul className="flex flex-col md:flex-row items-center gap-4 py-4 md:py-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className={`text-[13px] font-medium text-gray-800 hover:text-gray-600 ${router.pathname === link.href ? 'border-b-2 border-gray-800' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex items-center bg-gray-100 rounded px-2 py-1">
            <i className="fas fa-search text-gray-500"></i>
            <input type="search" placeholder="Search" className="ml-2 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 w-48 " />
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-800 hover:text-gray-600 flex items-center md:hidden"><i className="fa-regular fa-user"></i></Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 flex items-center md:hidden"><i className="fa-regular fa-heart"></i></Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 flex items-center md:hidden"><i className="fa-solid fa-bag-shopping"></i></Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 hidden md:flex items-center"><i className="fa-regular fa-user"></i><span className="ml-2 text-[13px] font-medium">Profile</span></Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 hidden md:flex items-center"><i className="fa-regular fa-heart"></i><span className="ml-2 text-[13px] font-medium">Wishlist</span></Link>
            <Link href="#" className="text-gray-800 hover:text-gray-600 hidden md:flex items-center"><i className="fa-solid fa-bag-shopping"></i><span className="ml-2 text-[13px] font-medium">Bag</span></Link>
          </div>
        </div>
      </header>

      {/* Slider Component with slides prop */}
      <ImageSlider slides={slides} />
    </div>
  );
}