import { Form, Link, json, redirect, useActionData } from "react-router-dom";
import useInput from "../hooks/use-input";
import { auth, googleAuthProvider } from "../firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Logo from "../components/Logo";
import MyFormInput from "../components/formComponents/MyFormInput";
import googleLogo from "../imgs/google.png";
import { useState } from "react";

async function handleLogin() {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    console.log(result);
  } catch (error) {}
}
// -----------------------------------------------------------------------------------
function Login() {
  const data = useActionData();
  console.log("data is -> ", data);
  const [isSigingUp, setSigingUp] = useState(false);

  const {
    value: enteredFirstName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHanlder: nameBlurHandler,
  } = useInput((value) => value.trim().length > 6);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHanlder: passwordBlurHandler,
  } = useInput((value) => value.trim().length > 6);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHanlder: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid;
  if (
    !enteredEmailIsValid ||
    !enteredPasswordIsValid ||
    (isSigingUp && !enteredNameIsValid)
  ) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }
  // ----------------------------------------------------------------------------
  return (
    <div className=" flex justify-center  w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Form
        method="Post"
        className="flex flex-col gap-y-4 w-fit h-fit mt-28 bg-white p-20 rounded-xl relative"
      >
        <Logo />
        {isSigingUp && (
          <MyFormInput
            id="name"
            label="Username"
            errorMsg="Pls enter a valid name"
            value={enteredFirstName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            hasError={nameInputHasError}
          />
        )}
        <MyFormInput
          id="email"
          label="Email"
          errorMsg="Email must contain @"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailInputHasError}
        />
        <MyFormInput
          id="password"
          label="Password"
          errorMsg="Password too short"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          hasError={passwordInputHasError}
        />
        <button
          disabled={!formIsValid}
          className={
            formIsValid
              ? "rounded p-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transform hover:-translate-y-1 hover:scale-110 "
              : "rounded p-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-not-allowed"
          }
          // onClick={() => dispatch(authActions.login)}
        >
          {isSigingUp ? "Signup" : "Login"}
        </button>

        <div className="flex flex-col items-center  ">
          <p className="text-sm text-gray-500 font-semibold ">Or Login using</p>
          <div className="w-14 h-14 rounded-full p-3 bg-red-400 transition duration-500 ease-in-out hover:bg-red-900 transform hover:-translate-y-1 hover:scale-110 ">
            <img
              src={googleLogo}
              alt="Description of the image"
              onClick={handleLogin}
            />
          </div>
        </div>
        <div className="text-xs absolute bottom-3 left-0 text-center w-full">
          <p>
            {isSigingUp ? "Already Registerd" : "Don't Have An Account"}
            <Link className="ml-1" onClick={() => setSigingUp(!isSigingUp)}>
              {isSigingUp ? "Login" : "Register"}
            </Link>
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
    const response = await signInWithEmailAndPassword(
      auth,
      enteredEmail,
      enteredPassword
    );
    console.log("response --- >", response.user);
    return response;
  } catch (error) {
    // return to the nearest element error
    console.log(error);
    throw json({ message: error.message }, { status: 500 });
  }

  // localStorage.setItem("token", auth.currentUser.uid);
  return redirect("/");
}
