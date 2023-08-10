import { Fragment, useState } from "react";

export function MyButtonsGroup() {
    const [number, setNumber] = useState(1);
  const inc = () =>
    setNumber((prev) => {
      if (prev === 5) {
        return (prev = 5);
      }
      return (prev += 1);
    });
  const dec = () =>
    setNumber((prev) => {
      if (prev === 1) {
        return (prev = 1);
      }
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
