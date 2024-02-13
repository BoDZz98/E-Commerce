import { Fragment } from "react";

const Info = () => {
  return (
    <Fragment>
      <div className="flex text-4xl font-extrabold gap-x-1">
        <p className="border px-3 text-red-400">E</p>
        <p className="text-black "> shopper</p>
      </div>
      <p>
        Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit
        erat lorem et magna ipsum dolore amet erat.
      </p>
      <div className="flex flex-col gap-y-1 ml-3">
        <h6 className="font-light">123 Street, Nasr City, Cairo, Egypt</h6>
        <h6 className="font-light">abdelrahman1904368@miuegypt.edu.eg</h6>
        <h6 className="font-light">01009977122</h6>
      </div>
    </Fragment>
  );
};

export default Info;
