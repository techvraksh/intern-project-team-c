import React from "react";
import "./admin-dash.css";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";

const EmpDashboard = () => {
  return (
    <div className="emp-dashboard">
      <NavBar />
      <SideBar />
      <div style={{ marginLeft: "250px" }}>
        <Container>
          <div>
            <h3 className="heading">Welcome Employee!</h3>
          </div>

          <Row md={3}>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Personal Details</Card.Title>

                  <Button href="details">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Projects</Card.Title>

                  <Button href="projects">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Team Members</Card.Title>
                  <Button href="employees">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row md={10}>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Payments</Card.Title>
                  <Button href="payments">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Meetings</Card.Title>
                  <Button href="meetings">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Bank Inforamtion</Card.Title>
                  <Button href="paymentdetails">View</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Job Openings</Card.Title>
                  <Button href="jobs">View</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default EmpDashboard;
