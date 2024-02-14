import { Form } from "react-router-dom";
import useInput from "../../hooks/use-input";

export function ReviewForm() {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHanlder: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value: any) => value.trim().length > 6);

  const {
    value: enteredDesc,
    isValid: enteredDescIsValid,
    hasError: descHasError,
    valueChangeHandler: descChangeHandler,
    inputBlurHanlder: descBlurHandler,
    reset: resetDescInput,
  } = useInput((value: any) => value.trim().length > 6);

  const descClass = descHasError ? "border border-danger bg-red-200" : "";
  return (
    <Form
      method="post"
      className="flex flex-col gap-y-4 bg-gray-100 p-16 rounded-xl"
    >
      <div className="flex flex-col gap-y-1 h-20 ">
        <label htmlFor="name">Your Rating</label>

        {firstNameInputHasError && (
          <p className="text-red-600 text-sm">Please rate</p>
        )}
      </div>

      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="desc">Your Review</label>
        <textarea
          // type="text"
          id="desc"
          name="desc"
          className={`rounded p-2 h-28 ${descClass}`}
          value={enteredDesc}
          // onChange={descChangeHandler}
          onBlur={descBlurHandler}
        />
        {descHasError && (
          <p className="text-red-600 text-sm">
            Your Review Must be Greater than 6
          </p>
        )}
      </div>

      <div className="flex flex-col gap-y-2 items-start">
        <button className="btn btn-primary">Submit</button>{" "}
        {/* disabled={!formIsValid} */}
      </div>
    </Form>
  );
}
