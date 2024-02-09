import React from "react";

const BestSelling = () => {
  return (
    <div>
      <div className="w-full flex justify-between">
        <h1 className="px-6 text-5xl font-bold">Our Best Selling Product</h1>
        <button className="rounded p-3 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transform hover:-translate-y-1 hover:scale-110 ">
          Shop More!
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
