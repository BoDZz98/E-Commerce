import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center gap-x-3 pt-2 w-screen h-10 bg-blue-100  px-28">
      <Link className="no-underline text-black hover:underline">
        <p>FAQs </p>
      </Link>
      <p>|</p>
      <Link className="no-underline text-black hover:underline">
        <p>Help</p>
      </Link>
      <p>|</p>
      <Link className="no-underline text-black hover:underline">
        <p>Support</p>
      </Link>
    </div>
  );
};

export default Header;
