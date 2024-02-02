import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Filter } from "../components/shop/Filter";
import { Products } from "../components/shop/Products";
import MyBreadcrumb from "../components/MyBreadcrumb";
import { useSelector } from "react-redux";

function Shop() {
  const data = useSelector((state) => state.auth.initData);
  return (
    <Fragment>
      <MyBreadcrumb title="our shop" subTitle="Shop" />
      <Container className="my-28">
        <Row>
          <Col xl={2}>
            <Filter />
          </Col>
          <Col xl={10}>
            <Products productsDetails={data} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Shop;
