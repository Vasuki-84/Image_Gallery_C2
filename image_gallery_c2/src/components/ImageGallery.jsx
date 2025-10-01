import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
    "https://i.pinimg.com/1200x/86/01/0f/86010f1bf12b15b7a812e84cf3256638.jpg",
    "https://i.pinimg.com/736x/4b/0d/c1/4b0dc1564d010187627c04f63c91cba9.jpg",
    "https://i.pinimg.com/1200x/53/a7/70/53a770c4de078844134e4420c2ff746c.jpg",
    "https://i.pinimg.com/736x/5e/f6/a0/5ef6a0c2c9aec6439731e395b4115c63.jpg",
    "https://i.pinimg.com/1200x/9b/fe/e7/9bfee7afd9c8f1cf7e6d3cf4802e0427.jpg",
    "https://i.pinimg.com/736x/02/be/28/02be28781a96493aac884df33c28b0c1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 1;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + imagesPerSlide < images.length ? prev + imagesPerSlide : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - imagesPerSlide >= 0
        ? prev - imagesPerSlide
        : images.length - imagesPerSlide
    );
  };

  return (
    <div className="min-h-screen  bg-gray-900  w-full ">
      <div className=" flex justify-center items-center  flex flex-col p-5 py-13">
        <h2 className="text-center text-3xl text-Bold mb-5 text-white font-serif">
          Image Gallery
        </h2>
        <div className="w-full max-w-[750px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[650px] text-center bg-gradient-to-br from-gray-800 to-gray-700 p-5 rounded-lg shadow-2xl overflow-hidden border border-gray-600">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                (currentIndex / imagesPerSlide) * 100
              }%)`,
            }}
          >
            {Array.from({
              length: Math.ceil(images.length / imagesPerSlide),
            }).map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="grid grid-cols-1 gap-4 w-full flex-shrink-0 px-5"
              >
                {images
                  .slice(
                    groupIndex * imagesPerSlide,
                    groupIndex * imagesPerSlide + imagesPerSlide
                  )
                  .map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Slide ${idx}`}
                      className="w-full h-full rounded-md shadow-md shadow-white/30 "
                    />
                  ))}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button
              className="px-5 py-2 bg-gray-600 text-white rounded-md mr-2 hover:bg-gray-500"
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
    </div>
  );
};

export default ImageGallery;
