import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Filter } from "../components/shop/Filter";
import { Products } from "../components/shop/Products";
import { json, useLoaderData } from "react-router-dom";
import MyBreadcrumb from "../components/MyBreadcrumb";

function Shop() {
  const data = useLoaderData();

  return (
    <Fragment>
      <MyBreadcrumb title="our shop" subTitle="Shop" />
      <Container className="my-28">
        <Row>
          <Col xl={2} >
            <Filter />
          </Col>
          <Col xl={10} >
            <Products productsDetails={data} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Shop;

export async function productsLoader() {
  const response = await fetch("https://dummyjson.com/products?limit=10");

  if (!response.ok) {
    // return { isError: true, message: "could not fetch events" };
    // this return statement will trigger the closest error element ,which is in the root
    return json({ message: "could not fetch" }, { status: 500 });
  } else {
    const resData = await response.json();

    // console.log(resData);
    return resData.products;
  }
}
