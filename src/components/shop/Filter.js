import { Form } from "react-router-dom";

export function Filter() {
  return (
    <div className=" h-screen ml-28 flex flex-col">
      <h2 className="mb-4"> Filter by price</h2>
      <Form className="border-b-2">
        <div className="flex gap-x-3 text-xl font-semibold mb-3">
          <input id="price1" type="checkbox" name="price" className="w-6 h-6" />
          <label htmlFor="price1">All prices</label>
        </div>
        <div className="flex gap-x-3 text-xl font-semibold mb-3">
          <input id="price2" type="checkbox" name="price" className="w-6 h-6" />
          <label htmlFor="price2">$0 - $100</label>
        </div>
        <div className="flex gap-x-3 text-xl font-semibold mb-3">
          <input id="price3" type="checkbox" name="price" className="w-6 h-6" />
          <label htmlFor="price3">$100 - $200</label>
        </div>
        <div className="flex gap-x-3 text-xl font-semibold mb-3">
          <input id="price4" type="checkbox" name="price" className="w-6 h-6" />
          <label htmlFor="price4">$200 - $300</label>
        </div>
        <div className="flex gap-x-3 text-xl font-semibold mb-3">
          <input id="price5" type="checkbox" name="price" className="w-6 h-6" />
          <label htmlFor="price5">$300 - $400</label>
        </div>
        <div className="flex gap-x-3 text-xl font-semibold mb-3">
          <input id="price6" type="checkbox" name="price" className="w-6 h-6" />
          <label htmlFor="price6">$400 - $500</label>
        </div>
      </Form>
    </div>
  );
}
