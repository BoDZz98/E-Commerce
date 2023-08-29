import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Root from "./layouts/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import Login, { loginAction } from "./pages/Login";
import SignUp, { registerAction } from "./pages/SignUp";
import Shop, { productsLoader } from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import { ProductDetails, detailsLoader } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { getAuthToken, logoutAction } from "./utils/authToken";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: getAuthToken,
    action: logoutAction,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <Shop />, loader: productsLoader },
      { path: "login", element: <Login />, action: loginAction },
      { path: "signUp", element: <SignUp />, action: registerAction },
      {
        path: "shop/:productId",
        element: <ProductDetails />,
        loader: detailsLoader,
      },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
