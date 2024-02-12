import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ui/ProductItem";

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
          <ProductItem item={item} cardSize="w-1/4" imgSize="h-2/3 w-3/4 " />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
