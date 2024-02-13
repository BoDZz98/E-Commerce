import { Fragment } from "react";
import { Form } from "react-bootstrap";

const Newsletter = () => {
  return (
    <Fragment>
      <h3 className="mb-3 font-bold ">Newsletter</h3>
      <Form className="flex flex-col w-2/3">
        <Form.Group className="mb-3 w-full">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3 w-full">
          <Form.Control type="text" placeholder="Your Email" />
        </Form.Group>
        <button className="py-3 rounded bg-red-300  border shadow hover:bg-red-400 hover:shadow-lg hover:text-white">
          Subscribe Now
        </button>
      </Form>
    </Fragment>
  );
};

export default Newsletter;
