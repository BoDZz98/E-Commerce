import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CartTable } from "../components/cart/CartTable";
import { CartSummary } from "../components/cart/CartSummary";
import { useSelector } from "react-redux";
import EmptyCart from "../components/cart/EmptyCart";
import MyBreadcrumb from "../components/ui/MyBreadcrumb";

export function Cart() {
  const cartSize = useSelector((state) => state.cart.totalQuantity);

  return (
    <Fragment>
      <MyBreadcrumb title="Shopping Cart" subTitle="Cart" />
      <Container className=" my-28">
        <Row className=" gap-y-20">
          <Col md={12} xl={8}>
            {cartSize !== 0 ? <CartTable /> : <EmptyCart />}
          </Col>
          <Col
            md={12}
            xl={4}
            className=" flex justify-center items-center "
          >
            <CartSummary />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
