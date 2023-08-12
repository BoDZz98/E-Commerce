import { Fragment } from "react";

export function CartSummary() {
  return (
    <Fragment>
      <div className="flex flex-col gap-y-10">
        <div className="flex w-5/6">
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
                $150 <br />
                $10
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-bold">
                Total 
              </td>
              <td class="flex justify-end px-6 py-4 font-bold">$160</td>
            </tr>
            <tr >
              <td class="px-6 " colSpan={2}>
                <button className="bg-red-400 py-3 mb-4 w-full font-normal hover:text-white hover:font-bold">
                  Proceed To Checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
