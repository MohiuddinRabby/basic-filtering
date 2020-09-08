import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dataTwo from "../dataTwo";
import { useState } from "react";
import Product from "./Product";
import "../style.css";
const Shop = () => {
  const fakeData = dataTwo;
  const [product, setProduct] = useState(dataTwo);
  const sizeS = () => {
    const smallSize = fakeData.filter((pd) => pd.size === "S");
    setProduct(smallSize);
  };
  const sizeM = () => {
    const smallSize = fakeData.filter((pd) => pd.size === "M");
    setProduct(smallSize);
  };
  const sizeL = () => {
    const smallSize = fakeData.filter((pd) => pd.size === "L");
    setProduct(smallSize);
  };
  const sizeXL = () => {
    const smallSize = fakeData.filter((pd) => pd.size === "XL");
    setProduct(smallSize);
  };
  const sizeXXL = () => {
    const smallSize = fakeData.filter((pd) => pd.size === "XXL");
    setProduct(smallSize);
  };
  return (
    <Container>
      <Row className="py-5">
        <Col md={6} className="size-option">
          <p onClick={sizeS}>S</p>
          <p onClick={sizeM}>M</p>
          <p onClick={sizeL}>L</p>
          <p onClick={sizeXL}>XL</p>
          <p onClick={sizeXXL}>XXL</p>
        </Col>
        <Col md={6}>
          <Row>
            {product.map((pd) => (
              <Col md={4} key={pd.id} className="py-1">
                <Product products={pd}></Product>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
