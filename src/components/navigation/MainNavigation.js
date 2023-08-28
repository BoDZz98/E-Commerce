import MainDropDown from "./MainDropDown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import FavAndCart from "./FavAndCart";
import Search from "./Search";
import { Fragment } from "react";
import Header from "../Header";

function MainNavigation() {
  return (
    <Fragment>
      <Header />
      <div className="flex flex-col px-28 mt-2">
        <Row className="flex justify-stretch">
          <Col lg={2} className=" mr-24">
            <div className="flex text-4xl font-extrabold gap-x-1">
              <p className="border px-3 text-red-400">E</p>
              <p className="text-black "> shopper</p>
            </div>
          </Col>
          <Col sm={1} md={4} xl={5} className="ml-4">
            <Search />
          </Col>
          <Col className="flex justify-end">
            <FavAndCart />
          </Col>
        </Row>

        <Row className="flex justify-stretch">
          <Col md={1} xxl={3}>
            <MainDropDown />
          </Col>
          <Col xl={9}>
            <NavBar />
          </Col>
        </Row>
      </div>
      
    </Fragment>
  );
}

export default MainNavigation;
