import React from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";

const ProjectPage = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div style={{ marginLeft: "250px" }}>
        <Container>
          <div style={{ marginBottom: "20px", marginTop: "10px" }}>
            <h1>Project's</h1>
          </div>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Project Title</Card.Title>
                  <Card.Text>
                    Some details or description about the project to get a
                    better understanding.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Deadline:1-1-2021</ListGroupItem>
                  <ListGroupItem>Team Lead:Robert</ListGroupItem>
                  <ListGroupItem>Number in Team:10</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Project Title</Card.Title>
                  <Card.Text>
                    Some details or description about the project to get a
                    better understanding.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Deadline:1-1-2021</ListGroupItem>
                  <ListGroupItem>Team Lead:Robert</ListGroupItem>
                  <ListGroupItem>Number in Team:10</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Project Title</Card.Title>
                  <Card.Text>
                    Some details or description about the project to get a
                    better understanding.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Deadline:1-1-2021</ListGroupItem>
                  <ListGroupItem>Team Lead:Robert</ListGroupItem>
                  <ListGroupItem>Number in Team:10</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProjectPage;
