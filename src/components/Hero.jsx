import React, { useEffect, useState } from "react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg",
      title: "The Importance of Regular Dental Checkups",
      description:
        "Learn why routine dental visits are crucial for maintaining oral health, preventing cavities, and catching issues early to ensure a bright, healthy smile",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/6627420/pexels-photo-6627420.jpeg",
      title: "Top Tips for a Brighter Smile",
      description:
        "Discover the secrets to achieving a sparkling smile with proper oral hygiene practices, whitening techniques, and a diet that promotes dental health.",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/4971503/pexels-photo-4971503.jpeg",
      title: "Understanding Common Dental Problems and Solutions",
      description:
        "Explore the causes and treatments for common dental issues like cavities, gum disease, and tooth sensitivity, and learn how to prevent them effectively.",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/6627278/pexels-photo-6627278.jpeg",
      title: "Cosmetic Dentistry: Transform Your Smile",
      description:
        "Dive into the world of cosmetic dentistry and find out how procedures like veneers, bonding, and teeth whitening can boost your confidence and enhance your smile.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-7xl w-full mx-auto group">
      {/* Slider */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-start bg-black/40 p-16">
              <div className="text-left max-w-xl">
                <h2 className="text-white text-4xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-11 h-11 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-11 h-11 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
      >
        &rarr;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
