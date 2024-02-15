import { useState } from "react";

import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import MyRating from "../ui/MyRating";

const data = [
  {
    name: "Maria Smantha",
    rating: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eosid officiis hic tenetur quae quaerat ad velit ab hic.",
  },
  {
    name: "Bodzation",
    rating: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eosid officiis hic tenetur quae quaerat ad velit ab hic.",
  },
  {
    name: "Dodzation",
    rating: 1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eosid officiis hic tenetur quae quaerat ad velit ab hic.",
  },
];
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  function inc() {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }
  function dec() {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }
  return (
    <div className="flex flex-col items-center mb-28 w-full ">
      <h1 className="px-6 text-5xl font-bold mb-5">Testimonials</h1>
      <div className="flex border rounded-lg  items-center justify-center h-80 w-10/12 shadow">
        {/* left arrow */}
        <div
          className="bg-gray-100 h-full w-1/12  flex items-center justify-center hover:bg-gray-300 duration-500 ease-in-out"
          onClick={dec}
        >
          <ArrowLeft />
        </div>
        <div className="flex flex-col items-center text-center w-10/12">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
            className="w-40 rounded-full shadow-lg dark:shadow-black/20"
          />
          <h5 className="mt-3 text-2xl font-bold">{data[index].name}</h5>
          <p className="w-3/4 text-lg">
            {data[index].desc}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              className="inline-block w-6"
            >
              <path
                fill="currentColor"
                d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
              />
            </svg>
          </p>
          <MyRating value={data[index].rating} readOnly />
        </div>
        <div
          className="bg-gray-100 h-full w-1/12 flex items-center justify-center hover:bg-gray-300 duration-500 ease-in-out"
          onClick={inc}
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
