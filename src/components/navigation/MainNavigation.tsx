import MainDropDown from "./MainDropDown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import FavAndCart from "./FavAndCart";
import Search from "./Search";
import { Fragment } from "react";
import Header from "../ui/Header";
import { Container } from "react-bootstrap";

function MainNavigation() {
  return (
    <Fragment>
      <Header />
      <Container className="flex flex-col px-28 mt-2">
        <Row className="">
          <Col xs={12} md={4} xl={3} className=" ">
            <div className="flex text-4xl font-extrabold gap-x-1">
              <p className="border px-3 text-red-400">E</p>
              <p className="text-black "> shopper</p>
            </div>
          </Col>
          <Col xs={8} md={5} xl={7}>
            <Search />
          </Col>
          <Col xs={4} md={3} xl={2} className="flex justify-end ">
            <FavAndCart />
          </Col>
        </Row>

        <Row className="flex justify-stretch">
          <Col xs={12} lg={4} xl={3}>
            <MainDropDown />
          </Col>
          <Col xs={12} lg={8} xl={9}>
            <NavBar />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default MainNavigation;
