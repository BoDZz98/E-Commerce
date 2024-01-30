import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function MainDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className="w-72 h-16 fs-4"
        variant="primary"
        id="dropdown-basic"
      >
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-72 ">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MainDropDown;
