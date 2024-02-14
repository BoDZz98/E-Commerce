import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Root from "./layouts/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import Login, { loginAction } from "./pages/Login";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import { ProductDetails, detailsLoader } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { searchAction } from "./components/navigation/Search";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    id: "root",
    action: searchAction,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <Shop /> },
      {
        path: "shop/:productId",
        element: <ProductDetails />,
        loader: detailsLoader,
      },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction,
  },
]);
function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
