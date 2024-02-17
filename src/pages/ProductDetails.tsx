import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductDetailsCarousel from "../components/productDetails/Carousel";
import { Details } from "../components/productDetails/Details";
import { MyTabs } from "../components/productDetails/Tabs";
import { json, useLoaderData, useLocation } from "react-router-dom";
import MyBreadcrumb from "../components/ui/MyBreadcrumb";
import { ReviewsTab } from "../components/productDetails/ReviewsTab";

export function ProductDetails() {
  // const details: any = useLoaderData();
  const location = useLocation();
  const productDetails = location.state;
  // console.log("imgs are :", productDetails);

  // let imgs = [];
  if (productDetails.images !== null) {
    // setisLoaded(true);
  }
  return (
    <Fragment>
      <MyBreadcrumb title="product details" subTitle="Shop" />
      <Container className="mt-28">
        <Row>
          <Col xl={5} className="p-4 ">
            {/* <ProductDetailsCarousel
              productImgs={productDetails.api_featured_image}
            /> */}
            <img
              className="h-full rounded-lg transition ease-in-out delay-150 hover:scale-125 duration-300"
              src={productDetails.api_featured_image}
            />
          </Col>
          <Col xl={7}>
            <Details productDetails={productDetails} />
          </Col>
        </Row>
        <Col className="flex flex-col items-center  my-28">
          {/* <MyTabs /> */}
          <ReviewsTab />
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
