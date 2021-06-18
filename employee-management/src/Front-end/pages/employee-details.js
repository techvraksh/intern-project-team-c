import React from 'react';
import './employee-detail.css'
import { Card, Button, Col, Container, CardImg, Row } from "react-bootstrap";
import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';

const EmployeeDetail = () => {
    return (
        <div className="employees">
            <NavBar />
            <SideBar />
            <div style={{ marginLeft: "250px" }}>
            <Container>
                
                <Row md={3}>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                            <CardImg className="card-img" src="https://via.placeholder.com/100x50" ></CardImg>
                                <Card.Title>John Doe</Card.Title>
                                <Card.Subtitle>
                                <h6>UI/UX Design Team</h6>
                    <p>Web Designer</p>
                    
                                </Card.Subtitle>
                                <Card.Text>
                                <h5 class="card-title">Employee-Id: 10148</h5>
                                <p class="card-text">
                        Date of Joining: 1st Jan, 2008
                    </p>
                                </Card.Text>
                                <Button className="btn-primary">View</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                
                                <Card.Text className="card-info">
                                    <p><span>Phone:</span> 987654321</p>
                                    <p><span>Email:</span> john.doe@example.com</p>
                                    <p><span>Birthday:</span> 24th July</p>
                                    <p><span>Address:</span> 123, North Park, London</p>
                                    <p><span>Gender:</span> Male</p>
                                    <p><span> Reports To</span>: Smith Jones</p>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>


            <Container>
                <Row md={3}>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Personal Information</Card.Title>
                                
                                <Card.Text className="card-info">
                                    <p><span>Passport No.:</span> 987654321</p>
                                    <p><span>Passport Expiry Date:</span> 09-07-2028</p>
                                    <p><span>Tel:</span> 2345682</p>
                                    <p><span>Nationality:</span> Indian</p>
                                    <p><span>Religion:</span> Christian</p>
                                    <p><span>Marital Status:</span> Married</p>
                                    <p><span>Employment of Spouse:</span> No</p>
                                    <p><span>Number of children:</span> 2</p>
                                    

                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Card.Body>
                            <Card.Title>Emergency Contact</Card.Title>
                                <Card.Subtitle>Primary</Card.Subtitle>
                                <Card.Text className="card-info">
                                
                                    <p><span>Name:</span> Joe</p>
                                    <p><span>Relation:</span> Brother</p>
                                    <p><span>Phone:</span> 97865453</p>
                                </Card.Text>

                                <Card.Subtitle>Secondary</Card.Subtitle>
                                <Card.Text className="card-info">
                                <p><span>Name:</span> Karen</p>
                                    <p><span>Relation:</span> Wife</p>
                                    <p><span>Phone:</span> 768493874</p>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>                 

                </Row>
            </Container>


            <Container>
                <Row md={3}>
                   

                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Bank Information</Card.Title>
                                
                                <Card.Text className="card-info">
                                <p><span>Bank Name:</span> Bank of India</p>
                                    <p><span>Bank Account:</span> 987654321</p>
                                    <p><span>IFSC Code:</span> 2345682</p>
                                    <p><span>Pan No.:</span> 768493</p>
                                   
                                </Card.Text>
                             
                            </Card.Body>
                        </Card>
                    </Col>                 


                    <Col md={6}>
                        <Card>
                            <Card.Body>
                            <Card.Title>Projects</Card.Title>
                                

                                <Button className="btn-primary">Show Projects</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>




            </div>


        </div>
    )
}
export default EmployeeDetail;