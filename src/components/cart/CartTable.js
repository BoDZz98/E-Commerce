import { CloseButton } from "react-bootstrap";
import { MyButtonsGroup } from "../MyButtonsGroup";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export function CartTable() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const deleteCartItem = (id) => dispatch(cartActions.deleteItemFromCart(id));

  return (
    <table class="min-w-full border text-center font-light dark:border-neutral-500">
      <thead class="border-b font-medium bg-blue-100 dark:border-neutral-500">
        <tr>
          <th scope="col" class="border-r px-6 py-4">
            Products
          </th>
          <th scope="col" class="border-r px-6 py-4 ">
            Price
          </th>
          <th scope="col" class="border-r px-6 py-4 ">
            Quantity
          </th>
          <th scope="col" class="border-r px-6 py-4 ">
            Total Price
          </th>
          <th scope="col" class="px-6 py-4">
            Remove
          </th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem) => (
          <tr class="border-b " key={cartItem.id}>
            <td class=" border-r px-6 py-4 font-medium ">
              <div className="flex gap-x-2 justify-evenly items-center">
                <img
                  className="w-14 h-14"
                  alt="product img"
                  src={cartItem.image}
                />
                <h4>{cartItem.name}</h4>
              </div>
            </td>
            <td class=" border-r px-6 py-4 ">${cartItem.price}</td>
            <td class=" border-r px-6 py-4">
              <MyButtonsGroup cartDetails={cartItem} />
            </td>
            <td class=" border-r px-6 py-4">${cartItem.totalPrice}</td>
            <td class="px-6 py-4">
              <CloseButton onClick={deleteCartItem.bind(null, cartItem.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
