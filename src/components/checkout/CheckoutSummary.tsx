import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const cartTotalPrice = useSelector((state: any) => state.cart.totalCartPrice);
  const cartItems = useSelector((state: any) => state.cart.items);
  const addressValid = useSelector((state: any) => state.auth.addressIsValid);
  console.log(cartItems);
  const shippingPrice = cartTotalPrice === 0 ? 0 : 50;

  return (
    <div className="flex flex-col items-center justify-center  ">
      <table className="w-5/6 border font-light dark:border-neutral-500 ">
        <thead className="border-b font-medium bg-blue-100 dark:border-neutral-500">
          <tr>
            <th scope="col" colSpan={2} className="px-6 py-4">
              Order Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 font-normal">Products</td>
          </tr>

          {cartItems.map((item: any) => (
            <tr className="border-b ">
              <td className="px-6 py-4 font-normal">{item.name}</td>
              <td className="flex justify-end px-6 py-4">${item.price}</td>
            </tr>
          ))}
          <tr className="border-b ">
            <td className="px-6 py-4 font-normal">
              Subtotal <br />
              Shipping
            </td>
            <td className="flex justify-end px-6 py-4">
              ${cartTotalPrice} <br />${shippingPrice}
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-bold">Total</td>
            <td className="flex justify-end px-6 py-4 font-bold">
              ${cartTotalPrice + shippingPrice}
            </td>
          </tr>
          <tr>
            <td className="px-6 " colSpan={2}>
              <button
                disabled={!addressValid}
                className={
                  !addressValid
                    ? "bg-red-300 py-3 mb-4 w-full font-normal  cursor-not-allowed"
                    : "bg-red-300 py-3 mb-4 w-full font-normal  hover:bg-red-400 hover:shadow-lg hover:text-white transition ease-in-out delay-150 hover:scale-110 duration-300 "
                }
              >
                Place Order
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutSummary;
