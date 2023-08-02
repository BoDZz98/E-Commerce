import { Form, Link } from "react-router-dom";
import useInput from "../hooks/use-input";

function SignUp() {
  let formIsValid;

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHanlder: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim().length > 6);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHanlder: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length > 6);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHanlder: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const firstNameClass = firstNameInputHasError
    ? "rounded border border-danger bg-red-200"
    : "rounded";
  const passwordClass = passwordInputHasError
    ? "rounded border border-danger bg-red-200"
    : "rounded";
  const emailClass = emailInputHasError
    ? "rounded border border-danger bg-red-200"
    : "rounded";
  return (
    <div className=" flex justify-center  bg-gray-400 w-screen h-screen ">
      <Form className="flex flex-col gap-y-4 w-1/5 h-1/2 mt-28 bg-gray-200 p-16 rounded-xl">
        <div className="flex flex-col gap-y-1 h-20 ">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            className={firstNameClass} /* focus:border focus:border-primary */
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="text-red-600 text-sm">
              First Name Must be Greater than 6
            </p>
          )}
        </div>

        <div className="flex flex-col h-20 gap-y-1 ">
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            className={emailClass}
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <p className="text-red-600 text-sm">email must include @</p>
          )}
        </div>
        <div className="flex flex-col h-20 gap-y-1 ">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="password"
            className={passwordClass}
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordInputHasError && (
            <p className="text-red-600 text-sm">
              Password Must be Greater than 6
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2 items-start">
          <button disabled={!formIsValid}>Register</button>
          <p className="text-sm ">
            Already Have An Account{" "}
            <Link className="" to="/login">
              Login
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
