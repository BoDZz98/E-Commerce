import { AddToCartForm } from "./AddToCartForm";

export function Details({productDetails}) {
 
  return (
    <div className="flex flex-col gap-y-1 p-4 ">
      <h3 className="font-extrabold">{productDetails.title}</h3>
      <p>Stars</p>
      <h2>${productDetails.price}</h2>
      <p className="mt-2">
        {productDetails.description}
      </p>
      <AddToCartForm details={productDetails}/>
      <div className="flex gap-x-2 mt-2 font-semibold">
        <p>Share on:</p>
      </div>
    </div>
  );
}
