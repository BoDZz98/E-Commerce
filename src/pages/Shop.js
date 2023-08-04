import { Fragment } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyBreadcrumb from "../components/shop/Breadcrumb";
import { Filter } from "../components/shop/Filter";
import { Products } from "../components/shop/Products";

function Shop() {
  return (
    <Fragment>
      <MyBreadcrumb />
      <div className="h-28"></div>
      <Container fluid>
        <Row>
          <Col xl={3}>
            <Filter />
          </Col>
          <Col xl={9} >
            <Products />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Shop;
