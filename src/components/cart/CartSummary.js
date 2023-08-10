import { Fragment } from "react";

export function CartSummary() {
  return (
    <Fragment>
      <div className="flex flex-col gap-y-10">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Coupon Code"
            className="p-3 border w-2/3"
          />
          <button className="bg-red-400 px-4 w-1/3 hover:text-white">Apply Coupon</button>
        </div>

        <table class="min-w-full border font-light dark:border-neutral-500">
          <thead class="border-b font-medium bg-blue-100 dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">
                Cart Summary
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b ">
              <td class="px-6 py-4">Subtotal : $150</td>
            </tr>
            <tr class="border-b ">
              <td class="px-6 py-4">Subtotal : $150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
