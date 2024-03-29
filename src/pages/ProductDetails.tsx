import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Details } from "../components/productDetails/Details";
import { json, useLoaderData, useLocation } from "react-router-dom";
import MyBreadcrumb from "../components/ui/MyBreadcrumb";
import { ReviewsTab } from "../components/productDetails/ReviewsTab";

export function ProductDetails() {
  // const details: any = useLoaderData();
  const location = useLocation();
  const productDetails = location.state;

  return (
    <Fragment>
      <MyBreadcrumb title="product details" subTitle="Shop" />
      <Container className="mt-28">
        <Row>
          <Col xl={5} className="p-4 ">
            <img
              className="h-full rounded-lg "
              src={productDetails.api_featured_image}
            />
          </Col>
          <Col xl={7}>
            <Details productDetails={productDetails} />
          </Col>
        </Row>
        <Col className="flex flex-col items-center  my-28">
          {/* <MyTabs /> */}
          <ReviewsTab productName={productDetails.name} />
        </Col>
      </Container>
    </Fragment>
  );
}

// REQUEST is used to get formdata and other stuff, PARAMS to get the paramaters passed to the url
export async function detailsLoader({ params }: any): Promise<{}> {
  const id = params.productId;
  const response2 = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?product_type='1'&product_category='1'&brand=''"
  );
  const response = await fetch("https://dummyjson.com/products/" + id);
  if (!response.ok) {
    throw json({ message: "no details for this Product" }, { status: 500 });
  } else {
    const data: {} = await response.json();

    return data;
  }
}

/* <ProductDetailsCarousel
              productImgs={productDetails.api_featured_image}
            /> */
