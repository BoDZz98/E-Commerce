import React from "react";
import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const cartTotalPrice = useSelector((state) => state.cart.totalCartPrice);
  const shippingPrice = cartTotalPrice === 0 ? 0 : 50;

  return (
    <div className="flex flex-col items-center justify-center  ">
      <table class="w-5/6 border font-light dark:border-neutral-500 ">
        <thead class="border-b font-medium bg-blue-100 dark:border-neutral-500">
          <tr>
            <th scope="col" colSpan={2} class="px-6 py-4">
              Order Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-6 font-normal">Products</td>
          </tr>
          <tr class="border-b ">
            <td class="px-6 py-4 font-normal">Subtotal</td>
            <td class="flex justify-end px-6 py-4">$150</td>
          </tr>
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
