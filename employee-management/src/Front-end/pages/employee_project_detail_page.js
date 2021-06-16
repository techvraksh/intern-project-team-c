import React from "react";
import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import NavBar from "../components/navbar";
const EmployeeProjectDetail = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginLeft: "250px" }}>
        <Container>
          <Row>
            <Col xs={8}>
              <Card>
                <Card.Header as="h5">Project Title</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel elit neque. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Vestibulum sollicitudin libero vitae est consectetur, a
                    molestie tortor consectetur. Aenean tincidunt interdum
                    ipsum, id pellentesque diam suscipit ut. Vivamus massa mi,
                    fermentum eget neque eget, imperdiet tristique lectus. Proin
                    at purus ut sem pellentesque tempor sit amet ut lectus. Sed
                    orci augue, placerat et pretium ac, hendrerit in felis.
                    Integer scelerisque libero non metus commodo, et hendrerit
                    diam aliquet. <br /> <br />
                    Proin tincidunt porttitor ligula, a tincidunt orci
                    pellentesque nec. Ut ultricies maximus nulla id consequat.
                    Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor
                    neque id massa porttitor, a pretium velit vehicula. Morbi
                    volutpat tincidunt urna, vel ullamcorper ligula fermentum
                    at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel elit neque. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Project Detail</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cost: $1200</ListGroupItem>
                  <ListGroupItem>Total Hours: 100 Hours</ListGroupItem>
                  <ListGroupItem>Created: 25 Feb, 2019</ListGroupItem>
                  <ListGroupItem>Deadline: 12 Jun, 2019</ListGroupItem>
                  <ListGroupItem>Team Lead: Barry Cuda</ListGroupItem>
                  <ListGroupItem>Status: Working</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: "20px" }} />
        <Container fluid>
          <h4>Project Images</h4>
          <Row>
            <Col>
              <Image src="holder.js/171x180" />
            </Col>
            <Col>
              <Image src="holder.js/171x180" />
            </Col>
            <Col>
              <Image src="holder.js/171x180" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EmployeeProjectDetail;
