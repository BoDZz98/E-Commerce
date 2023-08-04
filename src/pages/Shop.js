import { Fragment } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <Fragment>
      <div className="w-screen h-72 bg-red-300 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold">OUR SHOP</h1>
        <Breadcrumb className="fs-4">
          <Breadcrumb.Item href="/">
            <Link  to="/">Home </Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>Shop</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Fragment>
  );
}

export default Shop;
