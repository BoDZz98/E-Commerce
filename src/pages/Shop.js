import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyBreadcrumb from "../components/shop/Breadcrumb";
import { Filter } from "../components/shop/Filter";
import { Products } from "../components/shop/Products";
import { json, useLoaderData } from "react-router-dom";

function Shop() {
  const data = useLoaderData();
  
  return (
    <Fragment>
      
      <MyBreadcrumb />
      <div className="h-28"></div>
      <Container fluid>
        <Row>
          <Col xl={3}>
            <Filter />
          </Col>
          <Col xl={8} >
            <Products productsDetails={data}/>
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