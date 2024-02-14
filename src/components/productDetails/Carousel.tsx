import Carousel from "react-bootstrap/Carousel";

function ProductDetailsCarousel({
  productImgs,
}: {
  productImgs: Array<string>;
}) {
  return (
    <Carousel>
      {productImgs.map((oneImge: string) => (
        <Carousel.Item interval={3000} className="h-96">
          <img
            className="h-full  rounded-lg transition ease-in-out delay-150 hover:scale-125 duration-300"
            src={oneImge}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductDetailsCarousel;
