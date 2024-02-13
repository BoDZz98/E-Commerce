import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductDetailsCarousel from "../components/productDetails/Carousel";
import { Details } from "../components/productDetails/Details";
import { MyTabs } from "../components/productDetails/Tabs";
import { json, useLoaderData } from "react-router-dom";
import MyBreadcrumb from "../components/ui/MyBreadcrumb";

export function ProductDetails() {
  const details = useLoaderData();
  const imgs = details.images;
  return (
    <Fragment fluid>
      <MyBreadcrumb title="product details" subTitle="Shop" />
      <Container className="mt-28">
        <Row>
          <Col xl={5} className="p-4 border-2">
            <ProductDetailsCarousel productImgs={imgs} />
          </Col>
          <Col xl={7}>
            <Details productDetails={details} />
          </Col>
        </Row>
        <Col className="flex flex-col items-center  my-28">
          <MyTabs />
        </Col>
      </Container>
    </Fragment>
  );
}

// REQUEST is used to get formdata and other stuff, PARAMS to get the paramaters passed to the url
export async function detailsLoader({ request, params }) {
  const id = params.productId;
  const response = await fetch("https://dummyjson.com/products/" + id);
  if (!response.ok) {
    throw json({ message: "no details for this Product" }, { status: 500 });
  } else {
    const data = await response.json();

    return data;
  }
}
