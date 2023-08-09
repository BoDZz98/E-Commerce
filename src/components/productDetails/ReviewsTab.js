import { Col, Row } from "react-bootstrap";

export function ReviewsTab() {
  return (
    <Row className="w-screen px-28">
      <Col>
        <div className="flex flex-col gap-y-8">
          <h3>1 Review for Colorfull stylish shirt</h3>
          <div className="flex flex-col bg-gray-100 rounded-lg p-3">
            <h5>John Doe</h5>
            <h6>Stars</h6>
            <p>
              Diam amet duo labore stet elitr ea clita ipsum, tempor labore
              accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
              sed eirmod ipsum.
            </p>
          </div>
          <div className="flex flex-col bg-gray-100 rounded-lg p-3">
            <h5>John Doe</h5>
            <h6>Stars</h6>
            <p>
              Diam amet duo labore stet elitr ea clita ipsum, tempor labore
              accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
              sed eirmod ipsum.
            </p>
          </div>
        </div>
      </Col>
      <Col className="bg-yellow-400"></Col>
    </Row>
  );
}
