import Carousel from 'react-bootstrap/Carousel';
import MyImage from '../MyImage';

function ProductDetailsCarousel() {
  return (
    <Carousel  >
      <Carousel.Item interval={3000} >
        <MyImage  link='https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/denim-summer-fashion-trends-2023.jpg?fit=680%2C800'/>
      </Carousel.Item>
      <Carousel.Item interval={3000} >
      <MyImage  link='https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/denim-summer-fashion-trends-2023.jpg?fit=680%2C800'/>
        
      </Carousel.Item>
      <Carousel.Item >
      <MyImage  link='https://publish.purewow.net/wp-content/uploads/sites/2/2023/04/denim-summer-fashion-trends-2023.jpg?fit=680%2C800'/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductDetailsCarousel;