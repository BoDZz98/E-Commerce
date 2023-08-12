import { Fragment } from "react";
import { CartBreadcrump } from "../components/cart/Breadcrumb";
import { Col, Row } from "react-bootstrap";
import { CartTable } from "../components/cart/CartTable";
import { CartSummary } from "../components/cart/CartSummary";
import { useSelector } from "react-redux";
import EmptyCart from "../components/cart/EmptyCart";

export function Cart() {
  const cartSize = useSelector((state) => state.cart.totalQuantity);

  return (
    <Fragment>
      <CartBreadcrump />
      <div className="p-28">
        <Row>
          <Col xl={8}>{cartSize !== 0 ? <CartTable /> : <EmptyCart />}</Col>
          <Col xl={4}>
            <CartSummary />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
