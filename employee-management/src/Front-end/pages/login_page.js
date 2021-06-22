import React from "react";
import { Col, Form, Row, Container, Button, Image } from "react-bootstrap";
import loginpage from "./../../Assests/loginpage.png";
import "./login_page.css";
const LoginPage = () => {
  return (
    <div>
      <div style={{ marginTop: "20px" }} />
      <Container>
        <Row>
          <Col xs={6}>
            <div className="name">
              <h3 href="home">Product Name</h3>
            </div>
          </Col>
          <Col xs={6}>
            <div className="signup">
              <h6 style={{ fontWeight: "lighter" }}>New User?</h6>
              <Button href="signup" variant="link">
                Sign Up
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "80px" }} />
      <Container>
        <Row>
          <Col>
            <Image
              style={{ height: "350px", widhth: "350px" }}
              src={loginpage}
            />
          </Col>
          <Col>
            <h3> Welcome Back!</h3>
            <h5 style={{ fontWeight: "lighter" }}>Login to Continue..</h5>
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

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
