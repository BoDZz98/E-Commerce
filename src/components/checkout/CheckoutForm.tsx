import { Form } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { Col, Row } from "react-bootstrap";
import MyFormInput from "../formComponents/MyFormInput";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const {
    value: enteredAdress1,
    isValid: enteredAdress1IsValid,
    hasError: adress1InputHasError,
    valueChangeHandler: adress1ChangeHandler,
    inputBlurHanlder: adress1BlurHandler,
    reset: resetAdress1Input,
  } = useInput((value: any) => value.trim().length !== 0);

  const {
    value: enteredAdress2,
    isValid: enteredAdress2IsValid,
    hasError: adress2InputHasError,
    valueChangeHandler: adress2ChangeHandler,
    inputBlurHanlder: adress2BlurHandler,
    reset: resetAdress2Input,
  } = useInput((value: any) => value.trim().length !== 0);

  const {
    value: enteredCountry,
    isValid: enteredCountryIsValid,
    hasError: countryInputHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHanlder: countryBlurHandler,
    reset: resetCountryInput,
  } = useInput((value: any) => value.trim().length !== 0);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHanlder: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value: any) => value.trim().length !== 0);
  const {
    value: enteredMobile,
    isValid: enteredMobileIsValid,
    hasError: mobileInputHasError,
    valueChangeHandler: mobileChangeHandler,
    inputBlurHanlder: mobileBlurHandler,
    reset: resetMobileInput,
  } = useInput((value: any) => value.trim().length > 9);

  const {
    value: enteredZipCode,
    isValid: enteredZipCodeIsValid,
    hasError: zipCodeInputHasError,
    valueChangeHandler: zipCodeChangeHandler,
    inputBlurHanlder: zipCodeBlurHandler,
    reset: resetZipCodeInput,
  } = useInput((value: any) => value.trim().length > 2);

  if (
    enteredAdress1IsValid &&
    enteredAdress2IsValid &&
    enteredCountryIsValid &&
    enteredCityIsValid &&
    enteredMobileIsValid &&
    enteredZipCodeIsValid
  ) {
    dispatch(authActions.checkAddress());
  }
  return (
    <div className="flex flex-col items-center xl:items-start ">
      <h3 className="mb-8 font-bold  ">Billing Adress</h3>
      <Form className=" gap-y-4 w-5/6">
        <Row className="mb-4">
          <Col>
            <MyFormInput
              id="adress1"
              label="Address Line 1"
              errorMsg="Pls enter a valid address"
              value={enteredAdress1}
              onChange={adress1ChangeHandler}
              onBlur={adress1BlurHandler}
              hasError={adress1InputHasError}
            />
          </Col>
          <Col>
            <MyFormInput
              id="adress2"
              label="Address Line 2"
              errorMsg="Pls enter a valid address"
              value={enteredAdress2}
              onChange={adress2ChangeHandler}
              onBlur={adress2BlurHandler}
              hasError={adress2InputHasError}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <MyFormInput
              id="country"
              label="Country"
              errorMsg="Pls enter a valid country"
              value={enteredCountry}
              onChange={countryChangeHandler}
              onBlur={countryBlurHandler}
              hasError={countryInputHasError}
            />
          </Col>
          <Col>
            <MyFormInput
              id="city"
              label="City"
              errorMsg="Pls enter a valid City"
              value={enteredCity}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
              hasError={cityInputHasError}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <MyFormInput
              id="mobile"
              label="Mobile"
              errorMsg="Pls enter a valid mobile"
              value={enteredMobile}
              onChange={mobileChangeHandler}
              onBlur={mobileBlurHandler}
              hasError={mobileInputHasError}
            />
          </Col>
          <Col>
            <MyFormInput
              id="zipCode"
              label="Zip Code"
              errorMsg="Zip Code unavailable"
              value={enteredZipCode}
              onChange={zipCodeChangeHandler}
              onBlur={zipCodeBlurHandler}
              hasError={zipCodeInputHasError}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CheckoutForm;
