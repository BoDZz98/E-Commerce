import { Form } from "react-router-dom";
import MyCheckbox from "../formComponents/MyCheckbox";

export function Filter() {
  return (
    <div className=" flex flex-col">
      <h2 className="mb-4"> Filter by price</h2>
      <Form className="border-b-2">
        {/* <MyCheckbox id="price1" name="price" label="All Prices" />
        <MyCheckbox id="price2" name="price" label="$0 - $100" />
        <MyCheckbox id="price3" name="price" label="$100 - $200" />
        <MyCheckbox id="price4" name="price" label="$200 - $300" />
        <MyCheckbox id="price5" name="price" label="$300 - $400" />
        <MyCheckbox id="price6" name="price" label="$400 - $500" /> */}

        <label
          for="default-range"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Default range
        </label>
        <input
          id="default-range"
          type="range"
          value="50"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </Form>
    </div>
  );
}
