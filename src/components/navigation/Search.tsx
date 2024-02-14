import { Form } from "react-router-dom";
import {
  ALLITEMS,
  checkIfBrand,
  checkIfProduct,
} from "../../utils/helperFunctionsAPI";
import { useState } from "react";

function Search() {
  const [inputHanlder, setInputHanlder] = useState("");
  const [filteredItems, setFilteredItems] = useState<Array<string> | null>(
    null
  );

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

export async function searchAction({ request }: { request: any }) {
  const data = await request.formData();
  const enteredText = data.get("search");
  const isBrand = checkIfBrand(enteredText.toLowerCase());
  const isProduct = checkIfProduct(enteredText.toLowerCase());
  // console.log("bool is :", isBrand);
  const uri = `http://makeup-api.herokuapp.com/api/v1/products.json?${
    isBrand && `brand=${enteredText.toLowerCase()}`
  }&${isProduct && `product_type=${enteredText.toLowerCase()}`}`;
  console.log(uri);
  const response = await fetch(uri);
  const resData = await response.json();
  console.log(resData);
}

/* <Form className="flex w-full">
      <Form.Group className="mb-3 w-full">
        <Form.Control type="text" placeholder="Search for products" />
      </Form.Group>

      <Button className="w-10 h-10 mx-1" variant="outline-dark" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </Button>
    </Form> */
