import React, { Fragment } from "react";
import { CheckoutBreadcrump } from "../components/checkout/Breadcrumb";
import { Col, Row } from "react-bootstrap";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import CheckoutForm from "../components/checkout/CheckoutForm";

const Checkout = () => {
  return (
    <Fragment>
      <CheckoutBreadcrump />
      <div className="p-28">
        <Row>
          <Col xl={8}>
            <CheckoutForm />
          </Col>
          <Col xl={4}>
            <CheckoutSummary />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Checkout;
