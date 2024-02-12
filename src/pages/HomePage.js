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
import Testimonials from "../components/homePage/Testimonials";
function HomePage() {
  return (
    <Container className="flex flex-col gap-y-28">
      <div className="relative h-128 w-full flex items-center justify-center rounded-2xl overflow-hidden">
        <img src={background} className="absolute  w-full  opacity-100 " />
        <div className="z-10 w-1/2 flex flex-col gap-y-4">
          <h1 className=" text-8xl font-bold font-serif">Make Up</h1>
          <p className="font-semibold">
            Welcome to our website! Here, we celebrate the art of makeup.
            Discover the transformative power of cosmetics as we guide you
            through a world of beauty and self-expression. From enhancing your
            natural features to experimenting with bold looks, our platform is
            your go-to source for inspiration, tips, and tutorials.
          </p>
          <button className=" w-fit px-8 py-4 text-2xl rounded font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transform hover:-translate-y-1 hover:scale-110 ">
            Explore More !
          </button>
        </div>
      </div>

      <FourIcons />
      <NewArrivals />
      <WhyUs />
      <BestSelling />
      {/* <ProductCategories /> */}
      <Testimonials />
    </Container>
  );
}

export default HomePage;
