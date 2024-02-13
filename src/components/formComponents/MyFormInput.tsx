import { useEffect, useState } from "react";

const MyFormInput = ({
  label,
  id,
  errorMsg,
  value,
  onChange,
  onBlur,
  hasError,
}: {
  label: string;
  id: string;
  errorMsg: string;
  value: string;
  onChange: any;
  onBlur: any;
  hasError: boolean;
}) => {
  const [firstTime, setfirstTime] = useState(true);
  useEffect(() => {
    hasError && setfirstTime(false);
  }, [hasError]);

  return (
    <>
      {!hasError ? (
        <div className="relative">
          <input
            autoFocus={!firstTime && true}
            type={id === "password" ? "password" : "text"}
            id={id}
            name={id}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label
            htmlFor={id}
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            {label}
          </label>
        </div>
      ) : (
        <div className=" mb-3">
          <div className="relative ">
            <input
              autoFocus
              type={id === "password" ? "password" : "text"}
              id={id}
              aria-describedby="outlined_error_help"
              className="block  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-red-500 dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <label
              htmlFor={id}
              className="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              {label}
            </label>
          </div>
          <p
            id="outlined_error_help"
            className="absolute mt-2  text-xs text-red-600 dark:text-red-400"
          >
            {errorMsg}
          </p>
        </div>
      )}
    </>
  );
};

export default MyFormInput;
