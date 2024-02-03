import MinMaxFilter from "./MinMaxFilter";
import { useState } from "react";

export function Filter({ searchHandler }) {
  // Price Filter -------------------------------------------------------------------------------
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100);
  function minValueHandler(event) {
    if (event.target.value <= 0 || event.target.value > parseInt(maxPrice) - 1)
      return;
    setMinPrice(event.target.value);
  }
  function maxValueHandler(event) {
    if (event.target.value > 100 || event.target.value < parseInt(minPrice) + 1)
      return;
    setMaxPrice(event.target.value);
  }
  // Rating Filter -------------------------------------------------------------------------------
  const [minStar, setMinStar] = useState(1);
  const [maxStar, setMaxStar] = useState(5);
  function minRatingeHandler(event) {
    if (event.target.value <= 0 || event.target.value > parseInt(maxStar) - 1)
      return;
      setMinStar(event.target.value);
  }
  function maxRatingHandler(event) {
    if (event.target.value > 5 || event.target.value < parseInt(minStar) + 1)
      return;
      setMaxStar(event.target.value);
  }
  // -------------------------------------------------------------------------------
  return (
    <div className=" flex flex-col">
      <h3 className="mb-4"> Filter by price</h3>
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
