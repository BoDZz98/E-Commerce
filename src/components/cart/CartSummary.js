import { Fragment } from "react";
import { useSelector } from "react-redux";

export function CartSummary() {
  const cartTotalPrice = useSelector((state) => state.cart.totalCartPrice);
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

      <table class="w-5/6 border font-light dark:border-neutral-500">
        <thead class="border-b font-medium bg-blue-100 dark:border-neutral-500">
          <tr>
            <th scope="col" colSpan={2} class="px-6 py-4">
              Cart Summary
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b ">
            <td class="px-6 py-4 font-normal">
              Subtotal <br />
              Shipping
            </td>
            <td class="flex justify-end px-6 py-4">
              ${cartTotalPrice} <br />${shippingPrice}
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 font-bold">Total</td>
            <td class="flex justify-end px-6 py-4 font-bold">
              ${cartTotalPrice + shippingPrice}
            </td>
          </tr>
          <tr>
            <td class="px-6 " colSpan={2}>
              <button className="bg-red-400 py-3 mb-4 w-full font-normal hover:text-white hover:font-bold">
                Proceed To Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
