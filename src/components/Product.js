import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  const { name, size, price } = props.products;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Size: <strong>{size}</strong> Price: {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
