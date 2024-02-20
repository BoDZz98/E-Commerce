import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function CartSummary() {
  const navigate = useNavigate();
  const cartTotalPrice = useSelector((state: any) => state.cart.totalCartPrice);
  const shippingPrice = cartTotalPrice === 0 ? 0 : 50;
  return (
    <div className="flex flex-col gap-y-10 md:w-4/6 xl:w-full items-center">
      <div className="flex md:w-5/6 ">
        <input
          type="text"
          placeholder="Coupon Code"
          className="p-3 border w-2/3"
        />
        <button className="bg-red-400 px-4 w-1/3 hover:text-white">
          Apply Coupon
        </button>
      </div>

      <table className="w-5/6 border font-light dark:border-neutral-500">
        <thead className="border-b font-medium bg-blue-100 dark:border-neutral-500">
          <tr>
            <th scope="col" colSpan={2} className="px-6 py-4">
              Cart Summary
            </th>
          </tr>
        </thead>
        <tbody>
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
                disabled={cartTotalPrice === 0}
                onClick={() => navigate("/checkout")}
                className={
                  cartTotalPrice === 0
                    ? "bg-red-300 py-3 mb-4 w-full font-normal  cursor-not-allowed"
                    : "bg-red-300 py-3 mb-4 w-full font-normal  hover:bg-red-400 hover:shadow-lg hover:text-white transition ease-in-out delay-150 hover:scale-110 duration-300 "
                }
              >
                Proceed To Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
