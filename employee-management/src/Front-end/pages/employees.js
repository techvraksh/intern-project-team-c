import React from "react";
import "./employees.css";
import { Card, Button, Col, Container, CardImg, Row } from "react-bootstrap";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";

const Employees = () => {
  return (
    <div className="employees">
      <NavBar />
      <SideBar />
      <div style={{ marginLeft: "250px" }}>
        <Container>
          <div>
            <h3 className="heading">Employees</h3>
          </div>
          <Row md={3}>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <CardImg
                    className="card-img"
                    src="https://via.placeholder.com/100x50"
                  ></CardImg>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Subtitle>Programmer</Card.Subtitle>
                  <Card.Text>
                    <p>IT</p>
                    <p>@ john.doe@example.com</p>
                  </Card.Text>
                  <Button href="employeedetail" className="btn-primary">
                    View
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <CardImg
                    className="card-img"
                    src="https://via.placeholder.com/100x50"
                  ></CardImg>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Subtitle>Programmer</Card.Subtitle>
                  <Card.Text>
                    <p>IT</p>
                    <p>@ john.doe@example.com</p>
                  </Card.Text>
                  <Button className="btn-primary">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <CardImg
                    className="card-img"
                    src="https://via.placeholder.com/100x50"
                  ></CardImg>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Subtitle>Programmer</Card.Subtitle>
                  <Card.Text>
                    <p>IT</p>
                    <p>@ john.doe@example.com</p>
                  </Card.Text>
                  <Button className="btn-primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row md={3}>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <CardImg
                    className="card-img"
                    src="https://via.placeholder.com/100x50"
                  ></CardImg>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Subtitle>Programmer</Card.Subtitle>
                  <Card.Text>
                    <p>IT</p>
                    <p>@ john.doe@example.com</p>
                  </Card.Text>
                  <Button className="btn-primary">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <CardImg
                    className="card-img"
                    src="https://via.placeholder.com/100x50"
                  ></CardImg>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Subtitle>Programmer</Card.Subtitle>
                  <Card.Text>
                    <p>IT</p>
                    <p>@ john.doe@example.com</p>
                  </Card.Text>
                  <Button className="btn-primary">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <CardImg
                    className="card-img"
                    src="https://via.placeholder.com/100x50"
                  ></CardImg>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Subtitle>Programmer</Card.Subtitle>
                  <Card.Text>
                    <p>IT</p>
                    <p>@ john.doe@example.com</p>
                  </Card.Text>
                  <Button className="btn-primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Employees;
