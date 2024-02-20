import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import MyRating from "../ui/MyRating";

type ProductProps = {
  productsDetails: Array<{}>;
};

export function Products({ productsDetails }: ProductProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCartHandler(
    id: any,
    title: string,
    price: number,
    image: string
  ) {
    window.scrollTo({ top: 0, behavior: "smooth" });

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
      {productsDetails.map((product: { [key: string]: string }) => (
        <div
          id={product.id}
          className="w-80  max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow transition ease-in-out delay-150 hover:scale-110 duration-300"
        >
          <Link to={`${product.id}`} state={product}>
            <img
              className="w-full h-96 rounded-t-lg"
              src={product.api_featured_image}
            />
          </Link>
          <div className="px-5 mb-3">
            <div className="h-24 ">
              <Link to={`${product.id}`} className="no-underline">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  {product.name}
                </h5>
              </Link>
            </div>
            <div className="flex items-center my-2.5">
              <MyRating
                readOnly
                value={parseInt(product.rating).toFixed(0)}
                changeHandler={null}
              />
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {parseInt(product.rating).toFixed(0)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-black">
                ${parseInt(product.price).toFixed(0)}
              </span>
              <button
                onClick={addToCartHandler.bind(
                  null,
                  product.id,
                  product.name,
                  parseInt(product.price),
                  product.api_featured_image
                )}
                className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2.5 text-center "
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
