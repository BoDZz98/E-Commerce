import React, { Fragment } from "react";
import MyBreadcrumb from "../components/ui/MyBreadcrumb";
import { Col, Container, Row } from "react-bootstrap";

const SearchedProducts = () => {
  return (
    <Fragment>
      <MyBreadcrumb title="our shop" subTitle="Shop" />
      <Container className="my-28 px-96">
        <Row>
          <Col xl={2}>
            <Filter searchHandler={filterHandler} />
          </Col>
          <Col xl={10}>
            <Products
              productsDetails={filteredData}
              // productsDetails={filteredData.length !== 0 ? filteredData : data}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SearchedProducts;
