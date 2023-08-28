import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="text-black">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 gap-x-6 -ml-8"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* in NavLink the className Property wants a function */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 " : 'no-underline'
              }
            >
              <Nav.Link  href='/'className="text-black fs-5 ">Home</Nav.Link>
              
            </NavLink>
            <NavLink
              to="shop"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 " : 'no-underline'
              }
            >
              <Nav.Link href='/'className="text-black fs-5 ">Shop</Nav.Link>
            </NavLink>

            <NavDropdown
              className="text-black fs-5 "
              title="Pages"
              id="navbarScrollingDropdown"
            >
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  isActive ? "text-cyan-400 " : 'no-underline'
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
            </NavDropdown>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 " : 'no-underline'
              }
            >
              <Nav.Link  className="text-black fs-5 ">Contact</Nav.Link>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 " : 'no-underline'
              }
            >
             
              <Nav.Link href='/'>Login</Nav.Link>
            </NavLink>
            <NavLink
              to="signUp"
              className={({ isActive }) =>
                isActive ? "text-cyan-400  " : 'no-underline'
              }
            >
              <Nav.Link href='/'>Register</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;
