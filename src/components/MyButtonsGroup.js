import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

export function MyButtonsGroup({ productDetails, inCart, onChange }) {
  const defNumber = inCart ? productDetails.quantity : 1;
  const [number, setNumber] = useState(defNumber);
  const dispatch = useDispatch();
  const inc = () => {
    setNumber((prev) => {
      if (prev === 5) {
        return (prev = 5);
      }
      const newNumber = (prev += 1);
      inCart
        ? dispatch(
            cartActions.addItemToCart({
              quantity: 1,
              id: productDetails.id,
              title: productDetails.title,
              price: productDetails.price,
              image: productDetails.image,
            })
          )
        : onChange(newNumber);

      return newNumber;
    });
  };
  const dec = () =>
    setNumber((prev) => {
      const newNumber = (prev -= 1);

      if (inCart) {
        dispatch(
          cartActions.removeItemfromCart({
            id: productDetails.id,
            price: productDetails.price,
          })
        );
      } else {
        if (prev === 0) {
          return (prev = 1);
        }
        onChange(newNumber);
      }
      return newNumber;
    });
  return (
    <Fragment>
      <button
        type="button"
        onClick={dec}
        className="bg-red-400 pb-1 w-10 h-10 text-3xl font-bold"
      >
        -
      </button>
      <input className="w-14  px-6" type="text" value={number} disabled />
      <button
        type="button"
        onClick={inc}
        className="bg-red-400 pb-1 w-10 h-10 text-3xl font-bold"
      >
        +
      </button>
    </Fragment>
  );
}
