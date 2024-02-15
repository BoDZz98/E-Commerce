import { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Filter } from "../components/shop/Filter";
import { Products } from "../components/shop/Products";
import MyBreadcrumb from "../components/ui/MyBreadcrumb";
import { useSelector } from "react-redux";

interface State {
  auth: {
    initData: Array<{}>;
    // other properties of the cart if any
  };
  // other properties of the root state if any
}
type Product = {
  id: string;
  api_featured_image: string;
  name: string;
  price: number;
  rating: number;
};

function Shop() {
  const data = useSelector((state: State) => state.auth.initData);
  // console.log(data[0]);

  const [filteredData, setFilteredData] = useState<Array<{}>>([]);
  //
  const filterHandler = async (searchData: {
    filterType: string;
    minValue: number;
    maxValue: number;
  }) => {
    const newData: Array<{}> = data.filter(
      (product: { [key: string]: number }) => {
        console.log(product);
        return (
          parseInt(product[searchData.filterType].toFixed(0)) >=
            searchData.minValue &&
          parseInt(product[searchData.filterType].toFixed(0)) <=
            searchData.maxValue
        );
      }
    );
    console.log(newData.length);
    setFilteredData(newData);
  };

  return (
    <Fragment>
      <MyBreadcrumb title="our shop" subTitle="Shop" />
      <Container className="my-28">
        <Row>
          <Col xl={2}>
            <Filter searchHandler={filterHandler} />
          </Col>
          <Col xl={10}>
            <Products
              productsDetails={filteredData.length !== 0 ? filteredData : data}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Shop;
