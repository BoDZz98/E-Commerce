import { useState } from "react";

function useInput(validatValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validatValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  function valueChangeHandler(event) {
    setEnteredValue(event.target.value);
  }
  function inputBlurHanlder() {
    setIsTouched(true);
  }

  function reset(){
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid:valueIsValid,
    hasError: hasError,
    valueChangeHandler, // same as valueChangeHandler:valueChangeHandler,
    inputBlurHanlder,
    reset,
  };
}

export default useInput;
