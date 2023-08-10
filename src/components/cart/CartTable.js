import { CloseButton } from "react-bootstrap";
import { MyButtonsGroup } from "../MyButtonsGroup";

export function CartTable() {
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
        <tr class="border-b ">
          <td class=" border-r px-6 py-4 font-medium ">
            <div className="flex gap-x-2 justify-evenly items-center">
              <img
                className="w-14 h-14" alt="product img"
                src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              />
              <h4>Iphone 9</h4>
            </div>
          </td>
          <td class=" border-r px-6 py-4 ">$150</td>
          <td class=" border-r px-6 py-4">
            <MyButtonsGroup />
          </td>
          <td class=" border-r px-6 py-4">$150</td>
          <td class="px-6 py-4">
            <CloseButton />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
