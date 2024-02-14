import MinMaxFilter from "./MinMaxFilter";
import React, { useState } from "react";

type Event = React.ChangeEvent<HTMLInputElement>;
type FilterProps = {
  searchHandler: ({}: {
    filterType: string;
    minValue: number;
    maxValue: number;
  }) => void;
};
export function Filter({ searchHandler }: FilterProps) {
  // Price Filter -------------------------------------------------------------------------------
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100);
  function minValueHandler(event: Event) {
    const value = parseInt(event.target.value);
    if (value <= 0 || value > maxPrice - 1) return;
    setMinPrice(value);
  }
  function maxValueHandler(event: Event) {
    const value = parseInt(event.target.value);
    if (value > 100 || value < minPrice + 1) return;
    setMaxPrice(value);
  }
  // Rating Filter -------------------------------------------------------------------------------
  const [minStar, setMinStar] = useState(1);
  const [maxStar, setMaxStar] = useState(5);
  function minRatingeHandler(event: Event) {
    const value = parseInt(event.target.value);
    if (value <= 0 || value > maxStar - 1) return;
    setMinStar(value);
  }
  function maxRatingHandler(event: Event) {
    const value = parseInt(event.target.value);
    if (value > 5 || value < minStar + 1) return;
    setMaxStar(value);
  }
  // -------------------------------------------------------------------------------
  return (
    <div className=" flex flex-col">
      <h3 className="mb-4">Filter by price</h3>
      <MinMaxFilter
        min={1}
        max={100}
        value_1={minPrice}
        value_2={maxPrice}
        onChange_1={minValueHandler}
        onChange_2={maxValueHandler}
        onBlur={searchHandler.bind(null, {
          filterType: "price",
          minValue: minPrice,
          maxValue: maxPrice,
        })}
      />
      <h3 className="mb-4"> Filter by rating</h3>

      <MinMaxFilter
        min={1}
        max={5}
        value_1={minStar}
        value_2={maxStar}
        onChange_1={minRatingeHandler}
        onChange_2={maxRatingHandler}
        onBlur={searchHandler.bind(null, {
          filterType: "rating",
          minValue: minStar,
          maxValue: maxStar,
        })}
      />
    </div>
  );
}
