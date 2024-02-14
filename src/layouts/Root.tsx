import { useEffect } from "react";
import { Outlet, json } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/footer";
import { authActions } from "../store/auth-slice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

function Root() {
  const dispatch = useDispatch();
  // Loading the data --------------------------------------------------------------
  useEffect(() => {
    async function getData() {
      const data = await productsLoader();
      dispatch(authActions.setData(data));
    }
    getData();
  }, [dispatch]);
  // Manage the auth state --------------------------------------------------------------
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(authActions.login());
    }
  });

  return (
    <div className="overflow-x-hidden ">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;

export async function productsLoader(): Promise<Array<{}>> {
  const response = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?price_greater_than=1&rating_greater_than=1"
  );

  if (!response.ok) {
    // return { isError: true, message: "could not fetch events" };
    // this return statement will trigger the closest error element ,which is in the root

    return [];
    // return json({ message: "could not fetch" }, { status: 500 });
  } else {
    const resData = await response.json();

    // console.log(resData[0]);
    return resData.slice(0, 20);
  }
}
