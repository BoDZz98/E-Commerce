import MyCarousel from "../components/homePage/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FourIcons from "../components/homePage/FourIcons";
import ProductCategories from "../components/homePage/ProductCategories";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col xl={2}></Col>
        <Col className="bg-gray-100 h-96">
          <MyCarousel />
        </Col>
      </Row>
      <Row>
        <FourIcons />
      </Row>
      <Row>
        <ProductCategories />
      </Row>
    </Container>
  );
}

export default HomePage;
