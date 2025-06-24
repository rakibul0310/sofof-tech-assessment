"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with middle card focused

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative">
      {/* Horizontal Scrolling Cards Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4 px-4"
          style={{
            transform: `translateX(-${currentSlide * 304}px)`, // Adjust based on card width + gap
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-72 transition-all duration-300`}
            >
              {slide}
            </div>
          ))}
          {currentSlide >= 2 &&
            slides.slice(0, 4).map((slide, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-72 transition-all duration-300`}
              >
                {slide}
              </div>
            ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Bottom Progress Indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-1">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-purple-600"
                  : index < currentSlide
                  ? "w-1 rounded-full bg-purple-300"
                  : "w-1 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
