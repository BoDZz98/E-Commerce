import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    
      <Form className="flex w-full">
        <Form.Group
          className="mb-3 w-full"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control type="text" placeholder="Search for products" />
        </Form.Group>

        <Button className="w-10 h-10 mx-1" variant="outline-dark" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Button>
      </Form>
   
  );
}

export default Search;