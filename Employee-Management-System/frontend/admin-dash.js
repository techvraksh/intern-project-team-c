import React from 'react';
import './admin-dash.css'
import {Card, Button, Col, Container, Row } from "react-bootstrap";
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';


const AdminDashboard = () => {
    return(
        <div className="admin-dashboard">
            <NavBar />
            <SideBar />
            <div style={{ marginLeft: "250px" }}>
            <Container>

            <div>
                    <h3 className="heading">Welcome Admin!</h3>
                </div>

                <Row md={3}>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Employees</Card.Title>
                                
                                <Button>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Clients</Card.Title>
                                
                                <Button>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <Card.Body>
                            <Card.Title>Projects</Card.Title>
                                <Button>View</Button>
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
                                <Button>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Card.Body>
                            <Card.Title>Projects</Card.Title>
                                <Button>View</Button>
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
                            <Card.Title>Employee Tracking</Card.Title>
                                <Button>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Card.Body>
                            <Card.Title>Job Openings</Card.Title>
                                <Button>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                  
                </Row>
            </Container>





            </div>

        </div>
    )
}
export default AdminDashboard;