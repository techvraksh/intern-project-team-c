import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import image from "../../Assests/image.png";
import "./landing_page.css";

const LandingPage = () => {
  return (
    <div>
      <div style={{ marginTop: "20px" }} />
      <Container>
        <Row>
          <div className="image">
            <Col>Logo</Col>
          </div>

          <Col>
            <div className="project_name">
              <h1>Employee management System</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "90px" }} />
      <Container>
        <Row>
          <Col>
            <header>
              <div style={{ marginTop: "2rem" }} />
              <div>
                <h3 className="main_sub_heading">
                  One stop solution to all the <br /> Employee and Management
                  Need's
                </h3>
                <div style={{ marginTop: "20px" }} />
                <p className="main_heading_app_text">
                  Use and Grow with the best
                  <span aria-label="a rocket blasting off" role="img">
                    🚀
                  </span>
                </p>
              </div>
            </header>
          </Col>

          <Col>
            <div className="mainimage">
              <Image style={{ height: "350px", widhth: "350px" }} src={image} />
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "30px" }} />
      <Container>
        <Row>
          <Col>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="primary">Employee</Button>
            </div>
          </Col>
          <Col>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="primary">Admin</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
