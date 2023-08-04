import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Root from "./layouts/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import Login, { loginAction } from "./pages/Login";
import SignUp, { registerAction } from "./pages/SignUp";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <Shop /> },
      { path: "login", element: <Login /> ,action:loginAction},
      { path: "signUp", element: <SignUp />, action: registerAction },
    ],
  },
]);
function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
