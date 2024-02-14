import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
function ErrorPage() {
  // this is used to get the data in the response we threw
  const error: any = useRouteError();
  let title = "An error occured";
  let message = "sth went wrong";
  if (error.status === 500) {
    message = error.data.message;
  }
  // default react error if the page was not found
  if (error.status === 404) {
    title = "Not found";
    message = "Could not found the page";
  }
  return (
    <>
      <MainNavigation />

      <div>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
}

export default ErrorPage;
