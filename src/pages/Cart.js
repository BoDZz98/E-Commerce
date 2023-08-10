import { Fragment } from "react";
import { CartBreadcrump } from "../components/cart/Breadcrumb";
import { Col, Row } from "react-bootstrap";
import { CartTable } from "../components/cart/CartTable";
import { CartSummary } from "../components/cart/CartSummary";

export function Cart() {
  return (
    <Fragment>
      <CartBreadcrump />
      <div className="px-28">
        <Row>
          <Col xl={8}>
            <CartTable />
          </Col>
          <Col xl={4}>
            <CartSummary />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
