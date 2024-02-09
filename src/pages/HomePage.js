import MyCarousel from "../components/homePage/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FourIcons from "../components/homePage/FourIcons";
import ProductCategories from "../components/homePage/ProductCategories";
import background from "../imgs/background2.jpg";
import NewArrivals from "../components/homePage/NewArrivals";
import WhyUs from "../components/homePage/WhyUs";
import BestSelling from "../components/homePage/BestSelling";
function HomePage() {
  return (
    <Container className="flex flex-col gap-y-28">
      <div className="relative h-96 w-full flex items-center justify-center rounded-2xl overflow-hidden ">
        <img
          src={background}
          className="h-full w-full absolute opacity-80"
        ></img>
        <p className="z-10">hellsssssssssssssssssssssssssso</p>
      </div>

      <FourIcons />
      <NewArrivals />
      <WhyUs />
      <BestSelling />
      {/* <ProductCategories /> */}
    </Container>
  );
}

export default HomePage;
