import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ProductDetailsBreadcrump(){
    return (
        <div className="h-72 bg-red-300 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold">PRODUCT DETAILS</h1>
          <Breadcrumb className="fs-4">
            <Breadcrumb.Item href="/">
              <Link to="/">Home </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      );
}