import { Fragment } from "react";
import { ProductDetailsBreadcrump } from "../components/productDetails/Breadcrumb";
import { Col, Row } from "react-bootstrap";
import ProductDetailsCarousel from "../components/productDetails/Carousel";
import { Details } from "../components/productDetails/Details";
import { MyTabs } from "../components/productDetails/Tabs";

export function ProductDetails() {
  return (
    <Fragment>
      <ProductDetailsBreadcrump />
      <div className="h-28"></div>
      <div className="px-28">
        <Row>
          <Col xl={4}>
            <div className="w-full p-4 border-2">
              <ProductDetailsCarousel />
            </div>
          </Col>
          <Col xl={8}>
            <div className="w-full  p-4 ">
              <Details />
            </div>
          </Col>
        </Row>
        <div className=" flex flex-col items-center h-screen mt-28"><MyTabs /></div>
        
      </div>
    </Fragment>
  );
}
