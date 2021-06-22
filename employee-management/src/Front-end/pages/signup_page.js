import React from "react";
import { Col, Form, Row, Container, Button, Image } from "react-bootstrap";
import signuppage from "./../../Assests/signuppage.png";
import "./signup_page.css";
const SignupPage = () => {
  return (
    <div>
      <div style={{ marginTop: "20px" }} />
      <Container>
        <Row>
          <Col>
            <div className="name">
              <h3 href="home">Product Name</h3>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "80px" }} />
      <Container>
        <Row>
          <Col xs={6}>
            <Image
              style={{ height: "350px", widhth: "350px" }}
              src={signuppage}
            />
          </Col>
          <Col xs={6}>
            <h3>Fill up your detail's to get started!!</h3>

            <div style={{ marginTop: "30px" }} />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="success" type="submit">
                Sign-Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupPage;
