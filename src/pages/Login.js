import { Form, Link, json, redirect } from "react-router-dom";
import useInput from "../hooks/use-input";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
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

  const passwordClass = passwordInputHasError
    ? "rounded border border-danger bg-red-200"
    : "rounded";
  const emailClass = emailInputHasError
    ? "rounded border border-danger bg-red-200"
    : "rounded";

  let formIsValid;
  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  return (
    <div className=" flex justify-center  bg-gray-400 w-screen h-screen ">
      <Form
        method="Post"
        className="flex flex-col gap-y-4 w-1/5 h-1/2 mt-28 bg-gray-200 p-16 rounded-xl"
      >
        <div className="flex flex-col h-20 gap-y-1 ">
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="text"
            id="email"
            name="email"
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
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
          <button disabled={!formIsValid} className="btn btn-primary">
            Login
          </button>
          <p className="text-sm ">
            Don't Have An Account <Link to="/signUp">Register</Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Login;

export async function loginAction({ request, params }) {
  const data = await request.formData();

  const enteredEmail = data.get("email");
  const enteredPassword = data.get("password");
  console.log("email", enteredEmail, "passowrd ", enteredPassword);
  try {
    await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
  } catch (error) {
    // return to the nearest element error
    throw json({ message: error.message }, { status: 500 });
  }

  return redirect("/");
}
