import { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Filter } from "../components/shop/Filter";
import { Products } from "../components/shop/Products";
import MyBreadcrumb from "../components/ui/MyBreadcrumb";
import { useSelector } from "react-redux";

function Shop() {
  const data = useSelector((state) => state.auth.initData);
  const [filteredData, setFilteredData] = useState([]);
  //
  const filterHandler = async (searchData) => {
    const newData = data.filter((product) => {
      return (
        parseInt(product[searchData.filterType].toFixed(0)) >=
          searchData.minValue &&
        parseInt(product[searchData.filterType].toFixed(0)) <=
          searchData.maxValue
      );
    });
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
