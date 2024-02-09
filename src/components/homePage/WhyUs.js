import React from "react";
import { Col, Row } from "react-bootstrap";
import homeImg from "../../imgs/homeImg.jpg";
const WhyUs = () => {
  return (
    <Row className=" p-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl">
      <Col xs={12} xl={6} className="relative ">
        <img className="w-11/12 h-fit rounded-xl" src={homeImg} />
      </Col>
      <Col xs={12} xl={6} className="">
        {/* <div className="flex flex-col"> */}
        <h1 className="text-5xl font-bold mb-8 ">Why Choose Us?</h1>
        <Row>
          <Col sm={1} className=" ">
            <h3 className="text-4xl p-2 w-fit bg-blue-200 rounded-md ring ring-blue-700">1</h3>
          </Col>
          <Col sm={11}>
            <h3 className="font-bold">10 years of experience</h3>
            <p className="text-lg font-semibold mt-4">
              Provide 30 days easy return policy for all of our cusomers
            </p>
          </Col>
        </Row>
        {/* </div> */}
      </Col>
    </Row>
  );
};

export default WhyUs;
