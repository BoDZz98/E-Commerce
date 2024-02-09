import React from "react";
import { useSelector } from "react-redux";

const NewArrivals = () => {
  const data = useSelector((state) => state.auth.initData)?.slice(0, 5);
  console.log(data[1]);
  return (
    <div className="flex flex-col items-center ">
      <h1 className="px-6 text-5xl font-bold">New Arrivals</h1>
      <h6 className="text-lg mb-3">
        Look at the latest collection we have to offer
      </h6>
      <div className=" h-64 w-full flex gap-x-10">
        {data.map((item) => (
          <div className="border-4 h-full w-1/4 rounded-xl p-3 flex flex-col">
            <img
              className="h-2/3 w-3/4 object-fill rounded place-self-center"
              src={item.api_featured_image}
            ></img>
            <h6>{item.name}</h6>
            <h6 className=" place-self-end">$ 400</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
