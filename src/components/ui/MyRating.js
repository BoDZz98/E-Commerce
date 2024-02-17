import Rating from "react-rating";
import FullStar from "../icons/FullStar";
import EmptyStar from "../icons/EmptyStar";
const MyRating = ({ value, readOnly, changeHandler }) => {
  return (
    <Rating
      readonly={readOnly}
      initialRating={value}
      fullSymbol={<FullStar />}
      emptySymbol={<EmptyStar />}
      onChange={changeHandler}
    />
  );
};

export default MyRating;
