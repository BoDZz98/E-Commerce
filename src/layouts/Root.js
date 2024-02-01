import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/footer";
import { authActions } from "../store/auth-slice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

function Root() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(authActions.login());
    }
  });
  return (
    <div className="overflow-x-hidden">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
