import { Card, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Products() {
  return (
    <div className=" w-full h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <Card style={{ width: "23rem", height: "36rem" }}>
        <Card.Img
          variant="top"
          src="https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/denim-summer-fashion-trends-2023.jpg?fit=680%2C800"
        />
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <div className="flex flex-col gap-y-3 items-center">
              <Card.Title>Colorful Stylish Shirt</Card.Title>
              <Card.Text>$123.00</Card.Text>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div className="flex justify-between py-2 ">
              <Card.Link className="no-underline" href="/">
                <Link className="no-underline" to="/">
                  <p className="hover:text-red-400">View Details</p>
                </Link>
              </Card.Link>
              <Card.Link className="no-underline hover:text-info" href="#">
                <Link className="no-underline hover:fs-4" to="/">
                  <p className="hover:text-red-400">Add To Cart</p>
                </Link>
              </Card.Link>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {/* /////////// */}
      <Card style={{ width: "23rem", height: "36rem" }}>
        <Card.Img
          variant="top"
          src="https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/denim-summer-fashion-trends-2023.jpg?fit=680%2C800"
        />
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <div className="flex flex-col gap-y-3 items-center">
              <Card.Title>Colorful Stylish Shirt</Card.Title>
              <Card.Text>$123.00</Card.Text>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div className="flex justify-between py-2 ">
              <Card.Link className="no-underline" href="/">
                <Link className="no-underline" to="/">
                  <p className="hover:text-red-400">View Details</p>
                </Link>
              </Card.Link>
              <Card.Link className="no-underline hover:text-info" href="#">
                <Link className="no-underline hover:fs-4" to="/">
                  <p className="hover:text-red-400">Add To Cart</p>
                </Link>
              </Card.Link>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {/* //////////// */}
      <Card style={{ width: "23rem", height: "36rem" }}>
        <Card.Img
          variant="top"
          src="https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/denim-summer-fashion-trends-2023.jpg?fit=680%2C800"
        />
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <div className="flex flex-col gap-y-3 items-center">
              <Card.Title>Colorful Stylish Shirt</Card.Title>
              <Card.Text>$123.00</Card.Text>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div className="flex justify-between py-2 ">
              <Card.Link className="no-underline" href="/">
                <Link className="no-underline" to="/">
                  <p className="hover:text-red-400">View Details</p>
                </Link>
              </Card.Link>
              <Card.Link className="no-underline hover:text-info" href="#">
                <Link className="no-underline hover:fs-4" to="/">
                  <p className="hover:text-red-400">Add To Cart</p>
                </Link>
              </Card.Link>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
