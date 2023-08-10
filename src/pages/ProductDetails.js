import { Fragment } from "react";
import { ProductDetailsBreadcrump } from "../components/productDetails/Breadcrumb";
import { Col, Row } from "react-bootstrap";
import ProductDetailsCarousel from "../components/productDetails/Carousel";
import { Details } from "../components/productDetails/Details";
import { MyTabs } from "../components/productDetails/Tabs";
import { json, useLoaderData } from "react-router-dom";

export function ProductDetails() {
  const details = useLoaderData();
  const imgs=details.images
  return (
    <Fragment>
      <ProductDetailsBreadcrump />
      <div className="h-28"></div>
      <div className="px-28">
        <Row>
          <Col xl={4}>
            <div className="p-4 border-2">
              <ProductDetailsCarousel productImgs={imgs}/>
            </div>
          </Col>
          <Col xl={8}>
            <Details productDetails={details}/>
          </Col>
        </Row>
        <div className=" flex flex-col items-center h-screen mt-28">
          <MyTabs />
        </div>
      </div>
    </Fragment>
  );
}

// REQUEST is used to get formdata and other stuff, PARAMS to get the paramaters passed to the url
export async function detailsLoader({ request, params }) {
  const id = params.productId;
  const response = await fetch("https://dummyjson.com/products/"+id);
  if (!response.ok) {
    throw json({ message: "no details for this Product" }, { status: 500 });
  } else {
    const data = await response.json();
   
    return data;
  }
}
