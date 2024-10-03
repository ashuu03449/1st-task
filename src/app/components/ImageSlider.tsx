import { useState } from "react";

// Aapka ImageSlider component jo ab external slides ko as prop accept karega
export default function ImageSlider({ slides }: { slides: { type: string, src: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center mt-16">
      {slides[currentIndex].type === 'image' ? (
        <img
          src={slides[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="h-80 w-auto object-cover rounded-lg"
        />
      ) : (
        <video
          src={slides[currentIndex].src}
          className="h-80 w-auto object-cover rounded-lg"
          controls
          loop
          muted
        />
      )}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 m-4"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 m-4"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}
