



 import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
      "https://i.pinimg.com/736x/25/9e/bf/259ebfeedddf4c395fee7ff028c4166a.jpg",
    "https://i.pinimg.com/736x/4b/0d/c1/4b0dc1564d010187627c04f63c91cba9.jpg",
    "https://i.pinimg.com/736x/25/9e/bf/259ebfeedddf4c395fee7ff028c4166a.jpg",
    "",
    "",
    "",
    "",
    "",
    "",
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + imagesPerSlide < images.length ? prev + imagesPerSlide : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - imagesPerSlide >= 0 ? prev - imagesPerSlide : images.length - imagesPerSlide
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="w-[650px] text-center bg-gradient-to-br from-gray-800 to-gray-700 p-5 rounded-lg shadow-xl overflow-hidden border border-gray-600">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex / imagesPerSlide) * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(images.length / imagesPerSlide) }).map((_, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-3 gap-4 w-full flex-shrink-0">
              {images
                .slice(groupIndex * imagesPerSlide, groupIndex * imagesPerSlide + imagesPerSlide)
                .map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Slide ${idx}`}
                    className="w-full h-auto rounded-md shadow-lg shadow-black/50"
                  />
                ))}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-md mr-2 hover:bg-gray-500"
            onClick={prevSlide}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
