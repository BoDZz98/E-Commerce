import { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Filter } from "../components/shop/Filter";
import { Products } from "../components/shop/Products";
import MyBreadcrumb from "../components/ui/MyBreadcrumb";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

interface State {
  auth: {
    initData: Array<{}>;
    // other properties of the cart if any
  };
  // other properties of the root state if any
}

function Shop() {
  const data = useSelector((state: State) => state.auth.initData);
  const [filteredData, setFilteredData] = useState<Array<{}>>(data);

  const filterHandler = async (searchData: {
    filterType: string;
    minValue: number;
    maxValue: number;
  }) => {
    const newData: Array<{}> = data.filter(
      (product: { [key: string]: any }) => {
        // console.log(product);
        return (
          parseInt(product[searchData.filterType]) >= searchData.minValue &&
          parseInt(product[searchData.filterType]) <= searchData.maxValue
        );
      }
    );
    // console.log(newData.length);
    setFilteredData(newData);
  };

  return (
    <Fragment>
      <MyBreadcrumb title="our shop" subTitle="Shop" />
      <Container className="my-28 px-96">
        <Row>
          <Col xl={2}>
            <Filter searchHandler={filterHandler} />
          </Col>
          <Col xl={10}>
            <Products
              productsDetails={filteredData}
              // productsDetails={filteredData.length !== 0 ? filteredData : data}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Shop;
