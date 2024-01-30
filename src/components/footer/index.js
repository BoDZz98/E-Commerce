import React from "react";
import { Col, Row } from "react-bootstrap";
import Info from "./Info";
import QuickLinks from "./QuickLinks";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className=" w-screen pt-28 bg-blue-100 px-28">
      <Row className="flex gap-y-5 ">
        <Col md={12} lg={4}>
          <Info />
        </Col>
        <Col md={6} lg={4} className="flex flex-col lg:items-center ">
          <QuickLinks />
        </Col>
        <Col md={6} lg={4} className="flex flex-col">
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
