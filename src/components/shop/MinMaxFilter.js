import React from "react";

const MinMaxFilter = ({
  min,
  max,
  value_1,
  value_2,
  onChange_1,
  onChange_2,
  onBlur,
}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <div class="flex">
        <span class="inline-flex items-center w-10 px-2 text-sm text-gray-900 bg-gray-200  rounded-s-md ">
          Min
        </span>
        <input
          type="number"
          class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
          placeholder="$"
          min={min}
          value={value_1}
          onChange={onChange_1}
          onBlur={onBlur}
        />
      </div>
      <div class="flex">
        <span class="inline-flex items-center w-10 px-2 text-sm text-gray-900 bg-gray-200  rounded-s-md ">
          Max
        </span>
        <input
          type="number"
          class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
          placeholder="$"
        //   min={1 + parseInt(value_1)}
          max={max}
          value={value_2}
          onChange={onChange_2}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default MinMaxFilter;
