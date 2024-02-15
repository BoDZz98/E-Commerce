import MyRating from "../ui/MyRating";
import { AddToCartForm } from "./AddToCartForm";

export function Details({ productDetails }: any) {
  return (
    <div className="flex flex-col gap-y-1 p-4 ">
      <h3 className="font-extrabold">{productDetails.name}</h3>
      <MyRating value={productDetails.rating} readOnly />
      <h2>${productDetails.price}</h2>
      <p className="mt-2">{productDetails.description}</p>
      <AddToCartForm details={productDetails} />
      <div className="flex gap-x-2 mt-2 font-semibold">
        <p>Visit Us:</p>
      </div>
    </div>
  );
}
