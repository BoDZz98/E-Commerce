import Rating from "react-rating";
import FullStar from "../icons/FullStar";
import EmptyStar from "../icons/EmptyStar";
const MyRating = ({ value, readOnly }) => {
  return (
    <Rating
      readonly={readOnly}
      initialRating={value}
      fullSymbol={<FullStar />}
      emptySymbol={<EmptyStar />}
    />
  );
};

export default MyRating;
