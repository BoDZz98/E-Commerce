import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/footer";

function Root() {
  return (
    <div className="overflow-x-hidden">
      <MainNavigation />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
