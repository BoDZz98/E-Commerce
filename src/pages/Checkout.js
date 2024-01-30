import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import CheckoutForm from "../components/checkout/CheckoutForm";
import MyBreadcrumb from "../components/MyBreadcrumb";

const Checkout = () => {
  return (
    <Fragment>
      <MyBreadcrumb title="Checkout" subTitle="Checkout" />
      <Container className="my-28 ">
        <Row className="flex justify-center gap-y-20">
          <Col lg={10} xl={8}>
            <CheckoutForm />
          </Col>
          <Col lg={10} xl={4}>
            <CheckoutSummary />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Checkout;
