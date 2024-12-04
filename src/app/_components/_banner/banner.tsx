import React from "react";
interface BannerProps {
  img_banner: string;
}

const Banner = (props: BannerProps) => {
  const { img_banner } = props;
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: `url(${img_banner})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>
      <div className="container mx-auto relative z-10 flex justify-end">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 text-left">
            New Arrival
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 mt-2 text-left text-gray-800">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
