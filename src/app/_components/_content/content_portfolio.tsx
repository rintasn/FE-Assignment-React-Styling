import React from "react";

export default function Content() {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">50+ Beautiful rooms inspiration</h2>
        <p className="mb-6">
          Our designer already made a lot of beautiful prototype of rooms that inspire you.
        </p>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded">
          Explore More
        </button>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Inner Peace</h3>
          <p className="text-gray-600">01 - Bed Room</p>
        </div>
      </div>

      {/* Right Section (Slider) */}
      <div className="md:w-1/2 p-4">
        <div className="relative">
          <div className="slider">
            {/* Add your slider images here */}
            <img src="image1.jpg" alt="Room 1" className="w-full h-auto rounded-lg" />
            <img src="image2.jpg" alt="Room 2" className="w-full h-auto rounded-lg" />
            <img src="image3.jpg" alt="Room 3" className="w-full h-auto rounded-lg" />
          </div>
          {/* Add slider controls here */}
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &lt;
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
