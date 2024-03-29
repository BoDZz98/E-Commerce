import { Form, useActionData, useNavigate } from "react-router-dom";

import {
  ALLITEMS,
  checkIfBrand,
  checkIfProduct,
} from "../../utils/helperFunctionsAPI";
import { useState } from "react";

function Search() {
  const navigate = useNavigate();

  const [inputHanlder, setInputHanlder] = useState("");
  const [filteredItems, setFilteredItems] = useState<Array<string> | null>(
    null
  );
  // let searchedData: Array<{}>;

  const searchedData: any = useActionData();
  searchedData && navigate("/searchedProducts", { state: searchedData });

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputHanlder(e.target.value);
    if (inputHanlder.length >= 2) {
      const newData = ALLITEMS.filter((item) => {
        return item.toLowerCase().includes(inputHanlder.toLowerCase());
      });
      console.log(newData);
      setFilteredItems(newData);
    } else {
      setFilteredItems(null);
    }
  }
  return (
    <Form method="post" className="relative ">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          data-dropdown-toggle="dropdown"
          name="search"
          type="search"
          value={inputHanlder}
          onChange={changeHandler}
          id="default-search"
          className="shadow block w-full py-3 px-8 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500  "
          placeholder="Search product type, brand..."
          required
        />

        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>

        <div
          className="z-10 absolute w-full bg-white  rounded-lg shadow "
          id="dropdown"
        >
          {filteredItems && (
            <div className=" py-2  w-full text-sm text-gray-700 ">
              {filteredItems.map((item: string) => (
                <li
                  className="block py-2 px-8 w-full hover:bg-gray-200 "
                  id={item}
                  onClick={() => {
                    setInputHanlder(item);
                    setFilteredItems(null);
                  }}
                >
                  {item}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </Form>
  );
}

export default Search;

export async function searchAction({
  request,
}: {
  request: any;
}): Promise<Array<{}>> {
  const data = await request.formData();
  const enteredText = data.get("search");
  const isBrand = checkIfBrand(enteredText.toLowerCase());
  const isProduct = checkIfProduct(enteredText.toLowerCase());
  // console.log("bool is :", isBrand);
  const uri = `https://makeup-api.herokuapp.com/api/v1/products.json?price_greater_than=1&rating_greater_than=1&${
    isBrand && `brand=${enteredText.toLowerCase()}`
  }&${isProduct && `product_type=${enteredText.toLowerCase()}`}`;

  const response = await fetch(uri);
  const resData: Array<{}> = await response.json();
  // console.log("resData is :", resData);
  return resData;
}
