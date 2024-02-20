import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

type MyButtonsGroupProps = {
  productDetails: { quantity?: number; id: string; price: number };
  inCart: boolean;
  onChange: (num: number) => void;
};

export function MyButtonsGroup({
  productDetails,
  inCart,
  onChange,
}: MyButtonsGroupProps) {
  const defNumber = inCart ? productDetails.quantity : 1;
  const [number, setNumber] = useState<number>(defNumber!);
  const dispatch = useDispatch();
  const inc = () => {
    setNumber((prev) => {
      const newNumber = (prev += 1);

      if (newNumber > 5) {
        return 5;
      }
      inCart
        ? dispatch(
            cartActions.updateItemInCart({
              id: productDetails.id,
              price: productDetails.price,
            })
          )
        : onChange(newNumber);
      return newNumber;
    });
  };
  const dec = () =>
    setNumber((prev) => {
      const newNumber = (prev -= 1);
      if (newNumber === 0 && !inCart) {
        return 1;
      }

      inCart
        ? dispatch(
            cartActions.removeItemfromCart({
              id: productDetails.id,
              price: productDetails.price,
            })
          )
        : onChange(newNumber);

      return newNumber;
    });
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={dec}
        className="bg-red-300 pb-1 w-10 h-10 text-3xl font-bold hover:bg-red-400 hover:shadow-lg hover:text-white"
      >
        -
      </button>
      <div className="flex items-center justify-center w-10 h-10  bg-red-100">
        {number}
      </div>

      <button
        type="button"
        onClick={inc}
        className="bg-red-300 pb-1 w-10 h-10 text-3xl font-bold hover:bg-red-400 hover:shadow-lg hover:text-white"
      >
        +
      </button>
    </div>
  );
}
