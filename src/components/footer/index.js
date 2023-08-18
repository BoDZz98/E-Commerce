import React from "react";
import { Col, Row } from "react-bootstrap";
import Info from "./Info";
import QuickLinks from "./QuickLinks";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="items-center w-screen pt-28 bg-blue-100 px-28">
      <Row className=" ">
        <Col className="flex flex-col gap-y-3">
          <Info />
        </Col>
        <Col>
          <QuickLinks />
        </Col>
        <Col>
          <Newsletter />
        </Col>
      </Row>
     
      <h6 className="py-8">
        E-Shopper. All Rights Reserved. Designed by Reactjs and tailwindcss{" "}
        <br />
        Api used...
        <br />
        My Links :
      </h6>
    </div>
  );
};

export default Footer;
