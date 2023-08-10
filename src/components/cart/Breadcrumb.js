import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CartBreadcrump(){
    return (
        <div className="h-72 bg-red-300 flex flex-col items-center justify-center mb-28">
          <h1 className="text-5xl font-extrabold">Shopping Cart</h1>
          <Breadcrumb className="fs-4">
            <Breadcrumb.Item href="/">
              <Link to="/">Home </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      );
}