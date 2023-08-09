
import MainDropDown from "./MainDropDown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import FavAndCart from "./FavAndCart";
import Search from "./Search";

function MainNavigation() {
  return (
    <div className="flex flex-col px-28" >
      <Row className="flex ">
        <Col lg={2} className=" mr-24"> 
          <div className="flex">
            <p className="border border-orange-300 px-3 text-4xl text-red-400 font-extrabold ">
              E
            </p>
            <p className="text-4xl text-black font-extrabold ml-1"> shopper</p>
          </div>
        </Col>
        <Col sm={1} md={4} xl={5} className="ml-4">
          <Search />
        </Col>
        <Col>
          <FavAndCart />
        </Col>
      </Row>
      <Row>
        <Col xl={2}>
          <MainDropDown />
        </Col>
        <Col xl={9} className="ml-24">
          <NavBar />
        </Col>
      </Row>
    </div>
  );
}

export default MainNavigation;
