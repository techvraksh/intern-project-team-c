import React from 'react';

import { Card, ListGroup } from 'react-bootstrap';

const GeneratePaymentCard = () => {
    return (
        <>
            <Card className='col-md-10' style={{ marginLeft: '230px' }}>
                <Card.Title
                    className='text-center mt-3'
                    style={{ textTransform: 'uppercase' }}
                >
                    payslip for the month of feb 2021
                </Card.Title>
                <div className='mt-3 card_top d-flex flex-row justify-content-between'>
                    <div className='card_left_top px-4'>
                        <Card.Img
                            style={{
                                width: '6.75rem',
                                height: '6.75rem',
                            }}
                            variant='top'
                            src='https://i.imgur.com/sxlZzLC.png'
                            alt='company_logo'
                        />
                        <Card.Text
                            className='mt-2'
                            style={{ lineHeight: '0.9' }}
                        >
                            Employee Management
                        </Card.Text>
                        <Card.Text
                            className='pt-3'
                            style={{
                                lineHeight: '0.9',
                                fontWeight: '600',
                                fontSize: '0.925rem',
                            }}
                        >
                            John Doe
                        </Card.Text>
                        <Card.Text
                            style={{ lineHeight: '0.5', fontSize: '0.90rem' }}
                        >
                            Web Developer
                        </Card.Text>
                        <Card.Text
                            style={{ lineHeight: '0.5', fontSize: '0.90rem' }}
                        >
                            Employee ID: F0001
                        </Card.Text>
                        <Card.Text
                            style={{ lineHeight: '0.5', fontSize: '0.90rem' }}
                        >
                            Joining Date: 1 Jan 2014
                        </Card.Text>
                    </div>
                    <div className='card_right_top px-4'>
                        <Card.Text style={{ fontWeight: '600' }}>
                            PAYSLIP #49029
                        </Card.Text>
                        <Card.Text style={{ lineHeight: '0.5' }}>
                            Salary Month: March, 2021
                        </Card.Text>
                    </div>
                </div>

                <Card.Body className='mt-5 d-flex flex-row justify-content-md-between row'>
                    <Card.Subtitle
                        className='md-5 px-4'
                        style={{ width: '50%' }}
                    >
                        <Card.Text
                            style={{ fontWeight: '600', lineHeight: '0' }}
                        >
                            Earnings
                        </Card.Text>
                        <ListGroup className='pt-2'>
                            <ListGroup.Item className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    Basic Salary
                                </Card.Text>
                                <Card.Text>$6500</Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    House Rent Allowance (H.R.A.)
                                </Card.Text>
                                <Card.Text>$55</Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    Conveyance
                                </Card.Text>
                                <Card.Text>$55</Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    Other Allowance
                                </Card.Text>
                                <Card.Text>$55</Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    Total Earnings
                                </Card.Text>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    $55
                                </Card.Text>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Subtitle>
                    <Card.Subtitle
                        className='md-5 px-4'
                        style={{ width: '50%' }}
                    >
                        <Card.Text
                            style={{ fontWeight: '600', lineHeight: '0' }}
                        >
                            Deductions
                        </Card.Text>
                        <ListGroup className='pt-2'>
                            <ListGroup.Item className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    Tax Dedcuted at Source (T.D.S)
                                </Card.Text>
                                <Card.Text>$0</Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    Provident Fund
                                </Card.Text>
                                <Card.Text>$0</Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    ESI
                                </Card.Text>
                                <Card.Text>$0</Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex flex-row align-items-center align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    Loan
                                </Card.Text>
                                <Card.Text>$300</Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    Total Deduction
                                </Card.Text>
                                <Card.Text style={{ fontWeight: '600' }}>
                                    $59698
                                </Card.Text>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Subtitle>
                    <Card.Text
                        className='px-4 pt-2'
                        style={{ fontSize: '0.752rem' }}
                    >
                        <span style={{ fontWeight: '600' }}>
                            Net Salary: $59698
                        </span>{' '}
                        (Fifty nine thousand six hundred and ninety eight only.)
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default GeneratePaymentCard;
