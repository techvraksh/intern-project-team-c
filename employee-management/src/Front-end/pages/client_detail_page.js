import React from 'react';
import {
    Card,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
} from 'react-bootstrap';
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';

const ClientDetails = () => {
    return (
        <div>
            <NavBar />
            <SideBar />
            <div style={{ marginLeft: '250px' }}>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img
                                    variant='top'
                                    src='holder.js/100px180'
                                />
                                <Card.Body>
                                    <Card.Title>Client Name</Card.Title>
                                    <Card.Text>
                                        Company Name: Abc tech <br />
                                        Client Name: Abc tech <br />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        Phone Number: 123456789{' '}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Email: abc@gmail.com
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Address: #18 beverly hills
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div style={{ marginBottom: '20px', marginTop: '10px' }} />

                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Project Title</Card.Title>
                                    <Card.Text>
                                        Some details or description about the
                                        project to get a better understanding.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className='list-group-flush'>
                                    <ListGroupItem>
                                        Deadline:1-1-2021
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Team Lead:Robert
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Number in Team:10
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Project Title</Card.Title>
                                    <Card.Text>
                                        Some details or description about the
                                        project to get a better understanding.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className='list-group-flush'>
                                    <ListGroupItem>
                                        Deadline:1-1-2021
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Team Lead:Robert
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Number in Team:10
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Project Title</Card.Title>
                                    <Card.Text>
                                        Some details or description about the
                                        project to get a better understanding.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className='list-group-flush'>
                                    <ListGroupItem>
                                        Deadline:1-1-2021
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Team Lead:Robert
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Number in Team:10
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ClientDetails;
