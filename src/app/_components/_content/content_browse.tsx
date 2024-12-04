import React from "react";

export default function Content() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="flex justify-center items-center text-2xl font-bold pt-5">
        <p>Browse The Range</p>
      </div>
      <div className="flex justify-center items-center text-xl pt-1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex justify-center items-center h-[screen] w-full">
        <div className="grid grid-cols-3 gap-4 max-w-5xl">
          <div className="bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center w-64 h-100">
            <img
              src="/dining.png"
              alt="Dining"
              className="w-full h-70 object-cover rounded-md mb-2"
            />
            <h2 className="text-xl font-bold mb-2">Dining</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center w-64 h-100">
            <img
              src="/living.png"
              alt="Living"
              className="w-full h-70 object-cover rounded-md mb-2"
            />
            <h2 className="text-xl font-bold mb-2">Living</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center w-64 h-100">
            <img
              src="/bedroom.png"
              alt="Bedroom"
              className="w-full h-70 object-cover rounded-md mb-2"
            />
            <h2 className="text-xl font-bold mb-2">Bedroom</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
