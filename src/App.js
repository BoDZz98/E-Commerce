import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Root from "./layouts/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <Shop /> },
      { path: "login", element: <Login /> },
      { path: "signUp", element: <SignUp /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
