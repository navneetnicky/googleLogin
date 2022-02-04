import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import GoogleLoginButton from "./Component/GoogleLoginButton";
import Alearts from "./Component/Alearts";

const FormLogin = () => {
  const [alert, setAlert] = useState(false);

  const onClose = () => {
    setAlert(false);
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5">
        {alert ? (
          <Alearts
            variant="danger"
            message={"You can Login only with Google"}
            onClose={onClose}
          />
        ) : (
          ""
        )}
        <h4>LogIn</h4>
        <Col md={6} className="border mt-3">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              variant="outline-success"
              size="md"
              className="w-100"
              onClick={(e) => setAlert(true)}
            >
              LogIn
            </Button>

            <Row className="mt-3">
              <Col className="d-flex justify-content-center">
                <GoogleLoginButton />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormLogin;
