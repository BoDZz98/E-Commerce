import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useRouteLoaderData, Link, Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

function NavBar() {
  // const token = useRouteLoaderData("root");
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    dispatch(authActions.logout());
    await signOut(auth);
  };
  // --------------------------------------------------------------------------
  return (
    <Navbar className="text-black">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 gap-x-6 "
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          {/* in NavLink the className Property wants a function */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 " : "no-underline"
            }
          >
            <Nav.Link href="/" className="text-black fs-5 ">
              Home
            </Nav.Link>
          </NavLink>
          <NavLink
            to="shop"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 " : "no-underline"
            }
          >
            <Nav.Link href="/" className="text-black fs-5 ">
              Shop
            </Nav.Link>
          </NavLink>

          {/* <NavDropdown
            className="text-black fs-5 "
            title="Pages"
            id="navbarScrollingDropdown"
          >
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 " : "no-underline"
              }
            >
              <NavDropdown.Item href="/">Shopping Cart</NavDropdown.Item>
            </NavLink>

            <NavLink
              to="checkout"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 " : undefined
              }
            >
              <NavDropdown.Item href="/">Checkout</NavDropdown.Item>
            </NavLink>
          </NavDropdown> */}
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 " : "no-underline"
            }
          >
            <Nav.Link href="/" className="text-black fs-5 ">
              Shopping Cart
            </Nav.Link>
          </NavLink>
          <NavLink
            to="checkout"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 " : "no-underline"
            }
          >
            <Nav.Link href="/" className="text-black fs-5 ">
              checkout
            </Nav.Link>
          </NavLink>
        </Nav>
        {!isAuth ? (
          <Nav>
            <Link className="no-underline" to="login">
              <Nav.Link href="/">Login</Nav.Link>
            </Link>
          </Nav>
        ) : (
          <button type="submit" onClick={logoutHandler}>
            Logout
          </button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
