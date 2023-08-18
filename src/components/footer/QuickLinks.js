import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <Fragment>
      <h3 className="mb-3 font-bold ">Quick Links</h3>
      <div className="flex flex-col gap-y-2 ml-2 w-fit">
        <Link className="no-underline text-black hover:underline" to="/">
          Home
        </Link>
        <Link className="no-underline text-black hover:underline" to="/shop">
          Our Shop
        </Link>
        <Link className="no-underline text-black hover:underline" to="/cart">
          Shopping Cart
        </Link>
        <Link
          className="no-underline text-black hover:underline"
          to="/checkout"
        >
          Checkout
        </Link>
        <Link className="no-underline text-black hover:underline" to="/contact">
          Contact
        </Link>
      </div>
    </Fragment>
  );
};

export default QuickLinks;
