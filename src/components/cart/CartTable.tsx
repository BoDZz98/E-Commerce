import { CloseButton } from "react-bootstrap";
import { MyButtonsGroup } from "../ui/MyButtonsGroup";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  totalPrice: number;
};

export function CartTable() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const deleteCartItem = (id: string, price: number) =>
    dispatch(cartActions.deleteItemFromCart({ id, price }));

  return (
    <table className="min-w-full border text-center font-light dark:border-neutral-500">
      <thead className="border-b font-medium bg-blue-100 dark:border-neutral-500">
        <tr>
          <th scope="col" className="border-r px-6 py-4">
            Products
          </th>
          <th scope="col" className="border-r px-6 py-4 ">
            Price
          </th>
          <th scope="col" className="border-r px-6 py-4 ">
            Quantity
          </th>
          <th scope="col" className="border-r px-6 py-4 ">
            Total Price
          </th>
          <th scope="col" className="px-6 py-4">
            Remove
          </th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem: CartItem) => (
          <tr className="border-b " key={cartItem.id}>
            <td className=" border-r px-6 py-4 font-medium ">
              <div className="flex gap-x-2 justify-evenly items-center">
                <img
                  className="w-14 h-14"
                  alt="product img"
                  src={cartItem.image}
                />
                <h4>{cartItem.name}</h4>
              </div>
            </td>
            <td className=" border-r px-6 py-4 ">${cartItem.price}</td>
            <td className=" border-r px-6 py-4">
              <MyButtonsGroup
                productDetails={cartItem}
                inCart={true}
                onChange={() => {}}
              />
            </td>
            <td className=" border-r px-6 py-4">${cartItem.totalPrice}</td>
            <td className="px-6 py-4">
              <CloseButton
                onClick={deleteCartItem.bind(null, cartItem.id, cartItem.price)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
