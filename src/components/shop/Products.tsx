import { Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
// import ReactStars from "react-rating-stars-component";

export function Products({ productsDetails }: any) {
  const dispatch = useDispatch();
  function addToCartHandler(
    id: any,
    title: string,
    price: number,
    image: string
  ) {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price, // same as price : price
        image,
        quantity: 1,
      })
    );
  }
  return (
    <div className="gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
      {productsDetails.map((product: any) => (
        <div
          id={product.id}
          className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:scale-110 duration-300"
        >
          <Link to={`${product.id}`}>
            <img
              className="w-full h-96 rounded-t-lg"
              src={product.api_featured_image}
            />
          </Link>
          <div className="px-5 pb-5">
            <Link to={`${product.id}`} className="no-underline">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                {product.name}
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              {/* <ReactStars
                edit={false}
                count={5}
                value={product.rating.toFixed(0)}
                // onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              /> */}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {product.rating.toFixed(0)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-black">
                ${product.price}
              </span>
              <button
                onClick={addToCartHandler.bind(
                  null,
                  product.id,
                  product.name,
                  product.price,
                  product.api_featured_image
                )}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <Card style={{ width: "20rem", height: "25rem" }} id={product.id}>
          <Card.Img style={{ height: "14rem" }} src={product.api_featured_image} />

          <Card.Body className="flex flex-col  items-center">
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>

          <ListGroup>
            <ListGroup.Item>
              <div className="flex justify-between  py-2 ">
                <Card.Link className="no-underline" href="/">
                  <Link className="no-underline" to={`${product.id}`}>
                    <p className="hover:text-red-400">View Details</p>
                  </Link>
                </Card.Link>
                <Card.Link className="no-underline hover:text-info" href="#">
                  <button
                    onClick={addToCartHandler.bind(
                      null,
                      product.id,
                      product.title,
                      product.price,
                      product.thumbnail
                    )}
                    className="no-underline"
                  >
                    <p className="hover:text-red-400">Add To Cart</p>
                  </button>
                </Card.Link>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card> */
}
