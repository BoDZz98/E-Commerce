import { Form } from "react-router-dom";
import useInput from "../../hooks/use-input";
import MyRating from "../ui/MyRating";
import { useState } from "react";

export function ReviewForm() {
  const [rating, setRating] = useState(1);

  const {
    value: enteredDesc,
    isValid: enteredDescIsValid,
    hasError: descHasError,
    valueChangeHandler: descChangeHandler,
    inputBlurHanlder: descBlurHandler,
    reset: resetDescInput,
  } = useInput((value: string): boolean => value.trim().length > 6);

  const descClass = descHasError ? "border border-danger bg-red-200" : "";
  return (
    <Form
      method="post"
      className="flex flex-col gap-y-4 bg-gray-100 p-16 rounded-xl"
    >
      <div className="flex flex-col gap-y-1 h-20 ">
        <label htmlFor="name">Your Rating</label>
        <MyRating
          readOnly={false}
          value={rating}
          changeHandler={(value: number) => setRating(value)}
        />
      </div>

      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="desc">Your Review</label>
        <textarea
          id="desc"
          name="desc"
          className={`rounded p-2 h-28 ${descClass}`}
          value={enteredDesc}
          onChange={descChangeHandler}
          onBlur={descBlurHandler}
        />
        {descHasError && (
          <p className="text-red-600 text-sm">Please enter a valid desc</p>
        )}
      </div>

      <div className="flex flex-col gap-y-2 items-start">
        <button className="btn btn-primary" disabled={!enteredDescIsValid}>
          Submit
        </button>
      </div>
    </Form>
  );
}
