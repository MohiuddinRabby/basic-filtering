import React from "react";
import { Container, Row, Col, Nav, Form, Button } from "react-bootstrap";
import data from "./data";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const products = data;
  const [info, setInfo] = useState(products);
  const [filterData, setFilterData] = useState("shirt");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("shirt");
  const [seData, setSedata] = useState([]);

  const searchFilter = products.filter((pd) => pd.category === `${search}`);
  console.log(searchFilter);
  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  const filteredItems = info.filter((fil) => fil.category === filterData);
  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <Nav>
            <Nav.Item>
              <Nav.Link onClick={() => setFilterData("shirt")}>Shirt</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setFilterData("tshirt")}>
                T-Shirt
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setFilterData("pantshirt")}>
                Pant
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Container className="py-5">
            {filteredItems.map((pd) => (
              <li>{pd.name}</li>
            ))}
          </Container>
        </Col>
        <Col md={4}>
          <h1>All Data</h1>
          {info.map((pd) => (
            <li>
              Name: {pd.name} Category: {pd.category}
            </li>
          ))}
        </Col>
        <Col md={4}>
          <Form onSubmit={getSearch}>
            <Form.Control type="text" value={search} onChange={updateSearch} />
            <br />
            <Button>Search</Button>
          </Form>
          {searchFilter.map((pds) => (
            <li>{pds.name}</li>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
