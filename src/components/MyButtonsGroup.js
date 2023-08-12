import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

export function MyButtonsGroup({ cartDetails }) {
  const defNumber=cartDetails.quantity || 1
  const [number, setNumber] = useState(defNumber);
  const dispatch = useDispatch();
  const inc = () => {
    setNumber((prev) => {
      if (prev === 5) {
        return (prev = 5);
      }
      dispatch(
        cartActions.addItemToCart({
          id: cartDetails.id,
          title: cartDetails.title,
          price: cartDetails.price, 
          image: cartDetails.image,
        })
      );
      return (prev += 1);
    });
  };
  const dec = () =>
    setNumber((prev) => {
      dispatch(cartActions.removeItemfromCart(cartDetails.id));
      return (prev -= 1);
    });
  return (
    <Fragment>
      <button
        onClick={dec}
        className="bg-red-400 pb-1 w-10 h-10 text-3xl font-bold"
      >
        -
      </button>
      <input className="w-14  px-6" type="text" value={number} disabled />
      <button
        onClick={inc}
        className="bg-red-400 pb-1 w-10 h-10 text-3xl font-bold"
      >
        +
      </button>
    </Fragment>
  );
}
