import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import GoogleLogoutButton from "./Component/GoogleLogoutButton";
import axios from "axios";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState({});

  const getMyCountry = (e) => {
    e.preventDefault();
    const getData = axios
      .get(`https://api.ip2country.info/ip?${input}`)
      .then((response) => {
        const data = response.data;
        setUserData(data);
      });
    setInput("");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="d-flex flex-row-reverse bd-highlight mt-3">
            <GoogleLogoutButton />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-5">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="ipAddress">
                <Form.Label>Enter Your Ip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Ip Address"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="outline-success"
                size="sm"
                className="w-100"
                onClick={getMyCountry}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        {userData && userData.countryCode3 ? (
          <Row className="d-flex justify-content-center mt-5">
            <Col md={6}>
              <div
                style={{
                  display: "block",
                  padding: 30,
                }}
              >
                <h4>Country Details</h4>
                <ListGroup>
                  <ListGroupItem>
                    Country Code :{userData && userData.countryCode3}
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    Country Name:{userData && userData.countryName}
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
