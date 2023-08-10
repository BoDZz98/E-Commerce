import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Products({ productsDetails }) {
  return (
    <div className="gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {productsDetails.map((product) => (
        <Card style={{ width: "20rem", height: "25rem" }} id={product.id}>
          <Card.Img
            style={{ height: "14rem" }}
            src={product.thumbnail}
          />

          <Card.Body className="flex flex-col  items-center">
            <Card.Title >{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>

          <ListGroup>
            <ListGroup.Item>
              <div className="flex justify-between  py-2 ">
                <Card.Link className="no-underline" href='/'>
                  <Link className="no-underline" to={`${product.id}`}>
                    <p className="hover:text-red-400">View Details</p>
                  </Link>
                </Card.Link>
                <Card.Link className="no-underline hover:text-info" href="#">
                  <Link className="no-underline" to="/">
                    <p className="hover:text-red-400">Add To Cart</p>
                  </Link>
                </Card.Link>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}
