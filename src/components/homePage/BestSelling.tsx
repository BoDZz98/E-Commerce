import React from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductItem from "../ui/ProductItem";

const BestSelling = () => {
  const data = useSelector((state: any) => state.auth.initData)?.slice(5, 11);

  return (
    <Col>
      <div className="w-full flex justify-between mb-3  ">
        <h1 className="px-6 text-5xl font-bold">Our Best Selling Product</h1>
        <button className="rounded p-3 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transform hover:-translate-y-1 hover:scale-110 ">
          Shop More!
        </button>
      </div>
      {/* <div className="flex justify-center bg-red-200"> */}
      <div className="gap-y-10 grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {data.map((item: {}) => (
          <ProductItem
            item={item}
            cardSize="w-3/5"
            imgSize="w-full"
            textSize="text-lg"
          />
        ))}
      </div>
      {/* </div> */}
    </Col>
  );
};

export default BestSelling;
